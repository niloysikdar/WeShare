import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { getPosts, createPost, updatePost } from "../../actions/posts";

import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    author: "",
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
      dispatch(updatePost(currentId, postData)).then(() => {
        clearForm();
        dispatch(getPosts());
      });
    } else {
      dispatch(createPost(postData)).then(() => {
        clearForm();
        dispatch(getPosts());
      });
    }
    console.log("Form has been submitted");
  };

  const clearForm = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      author: "",
      tags: [],
      image: "",
    });
    console.log("Form has been cleared");
  };

  return (
    <Paper className={classes.paper}>
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
          name="author"
          label="Author"
          value={postData.author}
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        />
        <TextField
          variant="outlined"
          fullWidth
          name="tags"
          label="Tags"
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
              (image) => alert("Can't store image due to lack of DB Storage :(")
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
