const urlReducer = (state = "", action) => {
  if (action.type === "FETCH_URL") {
    return "https://github.com/mtarhini/JS-Calculator/tree/master";
  }
  return state;
};
export default urlReducer;
