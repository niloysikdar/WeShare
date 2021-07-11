import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import { createPost } from "../../actions/posts";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    author: "",
    tags: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    console.log("Form has been submitted");
  };

  const clearForm = (e) => {
    e.preventDefault();
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
        <Typography variant="h6">Share About Something</Typography>
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
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(image) =>
              setPostData({ ...postData, image: image.base64 })
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
