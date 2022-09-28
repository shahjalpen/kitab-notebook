import React, { Component } from "react";

import Notebooks from "./Notebooks/Notebooks";
import Note from "./Notebooks/Note";
import "./SecondarySideNav.scss";

import { connect } from "react-redux";

class SecondarySideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={
            "secondary-sidenav-container " +
            (this.props.hideSecondaryMenu ? "hide" : "show")
          }
        >
          {this.props.selectedMenu == "notebooks" ? (
            this.props.selectedNotebook != null ? (
              <Note />
            ) : (
              <Notebooks />
            )
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedMenu: state.selectedMenu,
    selectedNotebook: state.selectedNotebook,
    hideSecondaryMenu: state.hideSecondaryMenu,
  };
};
const dispatchActionMap = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, dispatchActionMap)(SecondarySideNav);
