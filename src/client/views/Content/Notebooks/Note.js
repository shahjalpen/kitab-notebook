import React, { Component } from "react";
import { connect } from "react-redux";
import "./Note.scss";

import EditorInstance from "../../../components/Editorjs/EditorInstance";
import NotesHeader from "./NotesHeader";

class Note extends Component {
  constructor(props) {
    super(props);
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
  }

  componentDidMount() {}

  render() {
    console.log("Condition is: ", this.props.contentPage.type != null);
    console.log("Data is: ", this.props.contentPage.content);
    return (
      <div className="kitab-notes-container">
        <NotesHeader />
        <EditorInstance content={this.props.contentPage.content} />
      </div>
    );
  }

  toggleSubMenu() {
    this.props.toggleSubMenu();
  }
}
const mapStateToProps = (state) => {
  return {
    contentPage: state.contentPage,
    hideSecondaryMenu: state.hideSecondaryMenu,
  };
};
const dispatchActionMap = (dispatch) => {
  return {
    toggleSubMenu: () => dispatch(toggleSubMenu()),
  };
};
export default connect(mapStateToProps, dispatchActionMap)(Note);
