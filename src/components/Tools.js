import React from "react";
import { connect } from "react-redux";
import { navigate } from "../actions";
import History from "./ToolComonents/History";
import Settings from "./ToolComonents/Settings";
import Code from "./ToolComonents/Code";

const Tools = (props) => {
  const renderedBody = () => {
    switch (props.selectedButton) {
      case "history":
        return <History />;

      case "settings":
        return <Settings />;
      case "code":
        return <Code />;
      default:
        return null;
    }
  };

  return (
    <div className="card rounded-0 ">
      <div className="card-header align-items-center">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item mr-3">
            <a
              href="#"
              className={`btn ${
                props.selectedButton == "settings"
                  ? "btn-primary"
                  : "btn-secondary"
              }`}
              onClick={() => props.navigate("settings")}
            >
              <i class="fas fa-palette"></i>
            </a>
          </li>
          <li className="nav-item mr-3">
            <a
              href="#"
              className={`btn ${
                props.selectedButton == "history"
                  ? "btn-primary"
                  : "btn-secondary"
              }`}
              onClick={() => props.navigate("history")}
            >
              <i className="fa fa-history"></i>
            </a>
          </li>
          <li className="nav-item mr-3">
            <a
              href="#"
              className={`btn ${
                props.selectedButton == "code" ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => props.navigate("code")}
            >
              <i class="fas fa-code"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className={`${renderedBody() ? "card-body p-auto" : ""}`}>
        {renderedBody()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedButton: state.navigationReducer };
};

export default connect(mapStateToProps, {
  navigate: navigate,
})(Tools);
