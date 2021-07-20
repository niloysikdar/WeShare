import axios from "axios";

// For production
import dotenv from "dotenv";
dotenv.config();
const baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:5000";

// For Local Development
// const baseUrl = "http://localhost:5000";

export const getPosts = () => axios.get(`${baseUrl}/posts`);

export const createPost = (newPost) =>
  axios.post(`${baseUrl}/posts/create`, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${baseUrl}/posts/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${baseUrl}/posts/${id}`);

export const likePost = (id) => axios.patch(`${baseUrl}/posts/likepost/${id}`);

export const login = (formData) =>
  axios.post(`${baseUrl}/users/login`, formData);

export const signup = (formData) =>
  axios.post(`${baseUrl}/users/signup`, formData);
