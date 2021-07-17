import { combineReducers } from "redux";

import posts from "./posts";
import authReducer from "./auth";

export default combineReducers({ posts, authReducer });
