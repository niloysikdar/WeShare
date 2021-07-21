import axios from "axios";

// For production
import dotenv from "dotenv";
dotenv.config();
const baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:5000";

// For Local Development
// const baseUrl = "http://localhost:5000";

const API = axios.create({ baseURL: baseUrl });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userdata")) {
    const token = JSON.parse(localStorage.getItem("userdata")).token;
    req.headers.authorization = `Bearer ${token}`;
  }

  return req;
});

export const getPosts = () => API.get("/posts");

export const createPost = (newPost) => API.post("/posts/create", newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/likepost/${id}`);

export const login = (formData) => API.post("/users/login", formData);

export const signup = (formData) => API.post("/users/signup", formData);
