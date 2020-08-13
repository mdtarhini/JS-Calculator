import React from "react";
import { connect } from "react-redux";
import { fetchURL } from "../../actions";

class Code extends React.Component {
  componentDidMount = () => {
    this.props.fetchURL();
  };
  render() {
    return (
      <div className="d-flex px-2" style={{ backgroundColor: "whitesmoke" }}>
        <a href={this.props.url} target="_blank">
          <code className="my-auto">{this.props.url}</code>
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { url: state.urlReducer };
};

export default connect(mapStateToProps, { fetchURL: fetchURL })(Code);
