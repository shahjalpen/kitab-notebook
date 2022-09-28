import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import VerticleDots from "../../../components/VerticleDots/VerticleDots";

import "./Note.scss";
import { toggleSubMenu } from "../../../actions/MainMenuAction";

class NotesHeader extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.toggleSubMenuMethod = this.toggleSubMenuMethod.bind(this);
  }

  componentDidMount() {}

  onChange(newValue) {
    console.log("change", newValue);
  }

  render() {
    console.log(
      "Condition is Header: ",
      this.props.contentPage.content.notebookLabel
    );

    return (
      <div className="content-header">
        <div
          className="content-fullscreen"
          onClick={() => this.toggleSubMenuMethod()}
        >
          {this.props.hideSecondaryMenu ? (
            <i className="bx bx-arrow-to-right"></i>
          ) : (
            <i className="bx bx-fullscreen"></i>
          )}
        </div>
        <div className="content-header-label">
          {this.props.contentPage.content.notebookLabel != null
            ? this.props.contentPage.content.notebookLabel
            : ""}
        </div>
        <div className="content-header-info">
          <VerticleDots />
          <div className="flex-center">
            <i className="bx bx-x"></i>
          </div>
        </div>
      </div>
    );
  }

  toggleSubMenuMethod() {
    this.props.toggleSubMenu();
  }
}
const mapStateToProps = (state) => {
  return {
    contentPage: state.contentPage,
    hideSecondaryMenu: state.hideSecondaryMenu,
    selectedNotebook: state.selectedNotebook,
  };
};
const dispatchActionMap = (dispatch) => {
  return {
    toggleSubMenu: () => dispatch(toggleSubMenu()),
  };
};
export default connect(mapStateToProps, dispatchActionMap)(NotesHeader);
