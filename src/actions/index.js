// we call this index.js becayse when calling it, you only need to specify the path (an not the file name)
export const clickAButton = (button) => {
  return {
    type: button.type,
    payload: button,
  };
};

export const toggleHistory = () => {
  return {
    type: "TOGGLE_HISTORY",
  };
};

export const fetchButtons = () => {
  return {
    type: "FETCH_BUTTONS",
  };
};

export const navigate = (to) => {
  return {
    type: "NAVIGATE",
    payload: to,
  };
};

export const changeTheme = (theme) => {
  return {
    type: "CHANGE_THEME",
    payload: theme,
  };
};

export const fetchURL = () => {
  return {
    type: "FETCH_URL",
  };
};
