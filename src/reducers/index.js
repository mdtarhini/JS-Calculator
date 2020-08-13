// we call this index.js becayse when calling it, you only need to specify the path (an not the file name)
import { combineReducers } from "redux";
import historyReducer from "./historyReducer";
import buttonsReducer from "./buttonsReducer";
import equationReducer from "./equationReducer";
import navigationReducer from "./navigationReducer";
import themeReducer from "./themeReducer";
// ------------------------------------------------------------------------------//
export default combineReducers({
  equationReducer: equationReducer,
  historyReducer: historyReducer,
  buttonsReducer: buttonsReducer,
  navigationReducer: navigationReducer,
  themeReducer: themeReducer,
});
// ------------------------------------------------------------------------------//
