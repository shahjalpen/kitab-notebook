import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";

import "./Note.scss";
import NotesHeader from "../NotesHeader";
import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "../../../../components/Editorjs/EditorTools";
import Output from "editorjs-react-renderer";

import { closeSubMenu } from "../../../../actions/MainMenuAction";

var editorInstance = null;
class Note extends Component {
  constructor(props) {
    super(props);
    this.closeSubMenuMethod = this.closeSubMenuMethod.bind(this);
    this.ondatachange = this.ondatachange.bind(this);
  }

  componentDidMount() {
    this.editorInstance; // access editor-js
    console.log("vdfg", this.editorInstance);
  }

  async handleSave() {
    const savedData = await this.editorInstance.save();
    console.log("asdasd", savedData);
  }

  render() {
    console.log("Condition is: ", this.props.contentPageDetails.data != null);
    console.log("Data is: ", this.props.contentPageDetails.data);
    return (
      <div className="kitab-notes-container">
        <NotesHeader />
        <div className="content-editor">
          <EditorJs
            holder="editor-block"
            placeholder="Hello"
            tools={EDITOR_JS_TOOLS}
            onChange={(a) => this.ondatachange(a)}
            instanceRef={(instanceRef) => (this.editorInstance = instanceRef)}
          >
            <div id="editor-block"></div>
          </EditorJs>
        </div>
      </div>
    );
  }

  ondatachange(api) {
    console.log("changed", api);
    console.log("editor", this.editorInstance);

    console.log("asdasd", this.editorInstance.save());
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
