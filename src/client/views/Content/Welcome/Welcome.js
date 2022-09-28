import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import "./Welcome.scss";
class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="kitab-content welcome">Welcome !</div>;
  }
}
const mapStateToProps = (state) => {
  return {};
};
const dispatchActionMap = (dispatch) => ({});
export default connect(mapStateToProps, dispatchActionMap)(Welcome);
