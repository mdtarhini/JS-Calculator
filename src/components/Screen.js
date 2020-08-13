import React from "react";
import { connect } from "react-redux";
// import "./Screen.css";

const Screen = (props) => {
  const style = {
    fontSize: "5vh",
    color: "white",
    fontFamily: "Open Sans",
    backgroundColor:
      props.theme === "macos"
        ? "rgb(47, 47, 47)"
        : "freeCC"
        ? "rgb(10, 11, 33)"
        : "rgb(0, 0, 0)",
    height: "12vh",
  };
  return (
    <div
      className="row no-gutters justify-content-center"
      id="display"
      style={style}
    >
      <div className="col rounded-0 d-flex">
        <p className="m-auto screen-text">
          {props.equation.first
            .replace(/^0+/, "0")
            .replace(/(?=\d{2,})^0+/, "")}
        </p>
      </div>

      <div className="col-1 rounded-0 d-flex text-center">
        <p className="m-auto screen-text">
          {props.equation.operator === "=" ? "" : props.equation.operator}
        </p>
      </div>

      <div className="col rounded-0 d-flex">
        <p className="m-auto screen-text">{props.equation.second}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { equation: state.equationReducer, theme: state.themeReducer };
};

export default connect(mapStateToProps)(Screen);
