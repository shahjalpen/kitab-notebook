import React, { Component } from "react";

import { connect } from "react-redux";
import "./SideNav.scss";

import MainSideNav from "./MainSideNav";
import SecondarySideNav from "./SecondarySideNav";

class SideNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="side-menu-container">
        <MainSideNav />
        <SecondarySideNav />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const dispatchActionMap = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, dispatchActionMap)(SideNav);
