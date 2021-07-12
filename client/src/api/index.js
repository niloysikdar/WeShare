import axios from "axios";

const baseUrl = "http://localhost:5000/posts";
const createPostUrl = "http://localhost:5000/posts/create";

export const getPosts = () => axios.get(baseUrl);

export const createPost = (newPost) => axios.post(createPostUrl, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${baseUrl}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${baseUrl}/${id}`);
