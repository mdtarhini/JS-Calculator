// ------------------------------------------------------------------------------//
const historyReducer = (showHistory = false, action) => {
  if (action.type === "TOGGLE_HISTORY") {
    return !showHistory;
  }
  return showHistory;
};
export default historyReducer;
// ------------------------------------------------------------------------------//
