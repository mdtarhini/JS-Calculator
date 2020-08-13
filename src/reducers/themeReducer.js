const themeReducer = (state = "freeCC", action) => {
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  }
  return state;
};
export default themeReducer;
