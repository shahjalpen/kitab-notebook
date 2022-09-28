import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";

import "./Note.scss";
import NotesHeader from "../NotesHeader";

import "smartblock/css/smartblock.css";
import { SmartBlock, Extensions, Image, Heading1 } from "smartblock";

import { closeSubMenu } from "../../../../actions/MainMenuAction";

var editorInstance = null;
Extensions.push(new Image());
Extensions.push(new Heading1());
class Note extends Component {
  constructor(props) {
    super(props);
    this.closeSubMenuMethod = this.closeSubMenuMethod.bind(this);
    this.ondatachange = this.ondatachange.bind(this);
  }

  render() {
    console.log("Condition is: ", this.props.contentPageDetails.data != null);
    console.log("Data is: ", this.props.contentPageDetails.data);
    return (
      <div className="kitab-notes-container">
        <NotesHeader />
        <div className="content-editor">
          <SmartBlock
            extensions={Extensions}
            html={"<h2>Hello World</h2><p>hello</p>"}
            onChange={({ json, html }) => {
              console.log(json, html);
            }}
          />
        </div>
      </div>
    );
  }

  ondatachange(editor) {
    console.log("changed", this.editorInstance);
    console.log("editor", editor);
  }
  closeSubMenuMethod() {
    this.props.closeSubMenu();
  }
}
const mapStateToProps = (state) => {
  return {
    contentPageDetails: state.contentPageDetails,
    hideSecondaryMenu: state.hideSecondaryMenu,
  };
};
const dispatchActionMap = (dispatch) => {
  return {
    closeSubMenu: () => dispatch(closeSubMenu()),
  };
};
export default connect(mapStateToProps, dispatchActionMap)(Note);
