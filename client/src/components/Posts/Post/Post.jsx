import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUp";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Delete from "@material-ui/icons/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.image ? post.image : "https://i.imgur.com/lqtlMEL.png"}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.author}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHoriz />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {`Tags: ${post.tags}`}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" color="textPrimary">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-around" }}>
        <Button
          color="primary"
          onClick={() => {
            console.log("Like pressed");

            if (localStorage.getItem(`${post._id}`)) {
              alert("You have already Liked the post");
            } else {
              dispatch(likePost(post._id));
            }
            localStorage.setItem(`${post._id}`, true);
          }}
        >
          <ThumbUp style={{ marginRight: "10px" }} />
          {post.likeCount}
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            console.log("Delete Pressed");
            dispatch(deletePost(post._id));
          }}
        >
          <Delete style={{ marginRight: "10px" }} />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
