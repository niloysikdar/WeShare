import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import { getPosts, createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    image: "",
  });

  const selectedPost = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (selectedPost) {
      setPostData(selectedPost);
    }
  }, [selectedPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, author: userdata?.result.name })
      ).then(() => {
        clearForm();
        dispatch(getPosts());
      });
    } else {
      dispatch(createPost({ ...postData, author: userdata?.result.name })).then(
        () => {
          clearForm();
          dispatch(getPosts());
        }
      );
    }
  };

  const clearForm = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: [],
      image: "",
    });
  };

  if (!userdata) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Login to create and like posts
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper} variant="elevation">
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing a Post" : "Share About Something"}
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          name="title"
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          variant="outlined"
          fullWidth
          name="message"
          label="Description"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          fullWidth
          name="tags"
          label='Tags(Add "," between them)'
          value={postData.tags}
          onChange={(e) =>
            setPostData({
              ...postData,
              tags: e.target.value.replace(" ", "").split(","),
            })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={
              (image) =>
                swal("Unable to store images due to limited DB storage", {
                  icon: "warning",
                })
              // setPostData({ ...postData, image: image.base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          fullWidth
          variant="contained"
          color="secondary"
          size="large"
          onClick={clearForm}
        >
          Clear
        </Button>
        <Button
          className={classes.buttonSubmit}
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
