import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "../../actions";
const Settings = (props) => {
  return (
    <div>
      <div onChange={(e) => props.changeTheme(e.target.value)}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="radioThemeOptions"
            id="radioThemeMac"
            value="macos"
          />
          <label className="form-check-label" for="radioThemeMac">
            MacOS
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="radioThemeOptions"
            id="radioThemefcc"
            value="freeCC"
            defaultChecked={true}
          />
          <label className="form-check-label" for="radioThemefcc">
            freeCodeCamp
          </label>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { theme: state.themeReducer };
};
export default connect(mapStateToProps, {
  changeTheme: changeTheme,
})(Settings);
