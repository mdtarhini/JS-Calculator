import React from "react";
import "./Button.css";

import { connect } from "react-redux";
import { clickAButton } from "../actions";

const Button = (props) => {
  return (
    <button
      type="button"
      id={props.obj.id}
      className="calcBtn btn btn-secondary btn-block rounded-0"
      style={props.style}
      onClick={() => props.clickAButton(props.obj)}
    >
      {props.obj.label}
    </button>
  );
};

// conventional name
// the returned onject will be the props of the connected function (SongList)
const mapStateToProps = (state) => {
  return { theme: state.themeReducer };
};
export default connect(null, {
  clickAButton: clickAButton,
})(Button);

// Question: WHy did not we use call directly selectSong in the SongList component ? you can but it won't be connected to REDUX... and the dispatch function won't be invoked. BTW: The dispatch is automatically configured and called behind the scenes when using the connect function
