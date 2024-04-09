import { combineReducers } from "redux";
import auth from "./auth";
import chat from "./chat";
import data from "./data";
import errors from './errors';
import leads from './leads';
import messages from "./messages";
import users from "./users";

export default combineReducers({
    leads,
    users,
    errors,
    messages,
    auth,
    chat,
    data
});