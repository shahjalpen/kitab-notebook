import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";

import AceEditor from "react-ace";
import VerticleDots from "../../../components/VerticleDots/VerticleDots";
import Block from "../../../components/NotesComponents/Block";

import "./Note.scss";
import NotesHeader from "./NotesHeader";
import NotesTool from "./NotesTool";
import { closeSubMenu } from "../../../actions/MainMenuAction";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

var content;
class Note extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.closeSubMenuMethod = this.closeSubMenuMethod.bind(this);
  }

  onChange(newValue) {
    console.log("change", newValue);
  }

  render() {
    console.log("Condition is: ", this.props.contentPageDetails.data != null);
    this.content =
      this.props.contentPageDetails.data != null
        ? this.props.contentPageDetails.data.content
        : " ";
    console.log("Data is: ", this.content);
    return (
      <div className="kitab-notes-container">
        <NotesHeader />
        <div className="content-editor">
          <Block type="header" content="nuytui" headerType="header1" />
          <Block
            type="header"
            content="The div with id=“template” is the div that forms the tooltip. So far, I have only managed to make it appear at the center of the div in which the text is present. How can I make sure the tooltip appears exactly above the selected text? Can someone please help me out here?"
            headerType="header2"
          />
          <Block type="header" content="brtuy" headerType="header3" />
          <Block type="header" content="brtuy" headerType="header2" />
          <Block
            type="code"
            content="function hello() { console.log('hello user!'); }"
          />
          <Block type="image" />
        </div>
        <NotesTool />
      </div>
    );
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
