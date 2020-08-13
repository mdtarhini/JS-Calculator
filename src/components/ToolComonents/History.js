import React from "react";
import { connect } from "react-redux";

const History = (props) => {
  const historyContent = props.equation.history.map((item, index) => {
    return (
      <li className="list-group-item" key={index}>
        <code>{item}</code>
      </li>
    );
  });
  return (
    <div>
      <ul className="list-group list-group-flush">{historyContent}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    equation: state.equationReducer,
  };
};

export default connect(mapStateToProps)(History);
