import { combineReducers } from "redux";
import users from "./signup";
import userData from "./login";

console.log("reducer", userData);

const rootReducer = combineReducers({
  users,
  userData,
});

export default rootReducer;
