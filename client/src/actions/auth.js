import * as api from "../api";
import { actionTypes } from "../constants/actionTypes";

export const login = (formData, history) => async (dispatch) => {
  try {
    // Login
    console.log(`Login with ${JSON.stringify(formData)}`);
    // history.replace("/");
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (formData, history) => async (dispatch) => {
  try {
    // SignUp
    console.log(`SignUp with ${JSON.stringify(formData)}`);
    // history.replace("/");
  } catch (error) {
    console.log(error);
  }
};
