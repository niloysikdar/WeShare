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
import swal from "sweetalert";

import { likePost } from "../../../actions/posts";
// import { deletePost } from "../../../actions/posts";
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
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" color="textPrimary">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textPrimary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-around" }}>
        <Button
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <ThumbUp style={{ marginRight: "10px" }} />
          {post.likes !== undefined ? post.likes.length : 0}
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            swal("Can't allow to delete !", { icon: "error" });
            // dispatch(deletePost(post._id));
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
