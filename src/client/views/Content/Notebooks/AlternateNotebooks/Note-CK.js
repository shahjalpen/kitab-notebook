import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";

import "./Note.scss";
import NotesHeader from "../NotesHeader";

import CKEditor from "@ckeditor/ckeditor5-react";

import BalloonEditor from "@ckeditor/ckeditor5-build-balloon-block";

import { closeSubMenu } from "../../../../actions/MainMenuAction";

class Note extends Component {
  constructor(props) {
    super(props);
    this.closeSubMenuMethod = this.closeSubMenuMethod.bind(this);
  }

  render() {
    console.log("Condition is: ", this.props.contentPageDetails.data != null);
    console.log("Data is: ", this.props.contentPageDetails.data);
    return (
      <div className="kitab-notes-container">
        <NotesHeader />
        <div className="content-editor">
          <CKEditor
            className="editor-block"
            editor={BalloonEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
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
