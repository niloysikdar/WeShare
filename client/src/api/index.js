import axios from "axios";

const baseUrl = "http://localhost:5000/posts";

export const getPosts = () => axios.get(baseUrl);

export const createPost = (newPost) => axios.post(`${baseUrl}/create`, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${baseUrl}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${baseUrl}/${id}`);

export const likePost = (id) => axios.patch(`${baseUrl}/likepost/${id}`);
