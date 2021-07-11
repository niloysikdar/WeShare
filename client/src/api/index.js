import axios from "axios";

const getPostUrl = "http://localhost:5000/posts";
const createPostUrl = "http://localhost:5000/posts/create";

export const getPosts = () => axios.get(getPostUrl);

export const createPost = (newPost) => axios.post(createPostUrl, newPost);
