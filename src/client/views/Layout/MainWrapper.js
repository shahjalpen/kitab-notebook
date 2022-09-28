import React, { Component } from "react";
import { connect } from "react-redux";

import AppWrapper from "./AppWrapper";

class MainWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <AppWrapper />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const dispatchActionMap = (dispatch) => ({});
export default connect(mapStateToProps, dispatchActionMap)(MainWrapper);
