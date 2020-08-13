const navigationReducer = (state = "", action) => {
  if (action.type === "NAVIGATE") {
    return action.payload;
  }
  return state;
};
export default navigationReducer;
