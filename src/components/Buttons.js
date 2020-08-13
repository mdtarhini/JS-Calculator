import React from "react";
import Button from "./Button";

import { connect } from "react-redux";
import { fetchButtons } from "../actions";
// Define the button labels here inside an array:

class Buttons extends React.Component {
  getStyle(theme, accent = false) {
    switch (theme) {
      case "macos":
        return {
          color: "white",
          borderColor: "black",
          backgroundColor: accent
            ? "rgb(253, 158, 43)"
            : "rgba(60, 60, 70, 0.8)",
        };
      case "freCC":
      default:
        return {
          color: "rgba(10, 11, 33, 1)",
          borderColor: "rgba(10, 11, 33, 0.9)",
          backgroundColor: "rgb(208, 208, 213)",
        };
    }
  }
  grid() {
    return this.props.buttons.map((item, index) => {
      return (
        <div key={index} className={`col-${3 * item.span}`}>
          <Button
            obj={item}
            style={this.getStyle(
              this.props.theme,
              (item.type === "OPERATOR" && item.id !== "mod") ||
                item.type === "CALCULATE"
            )}
          />
        </div>
      );
    });
  }

  componentDidMount = () => {
    this.props.fetchButtons();
  };

  render() {
    return <div className="row no-gutters"> {this.grid()} </div>;
  }
}

const mapStateToProps = (state) => {
  return { buttons: state.buttonsReducer, theme: state.themeReducer };
};
export default connect(mapStateToProps, {
  fetchButtons: fetchButtons,
})(Buttons);
