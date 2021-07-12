import * as api from "../api";
import { actionTypes } from "../constants/actionTypes";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({
      type: actionTypes.FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({
      type: actionTypes.CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch({
      type: actionTypes.UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({
      type: actionTypes.DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({
      type: actionTypes.UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
