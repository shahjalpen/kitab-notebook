import React, { Component } from "react";
import { connect } from "react-redux";

import "./Note.scss";
import SearchBox from "../../../components/Search/SearchBox";
var sorted = {};

import {
  openNotebooksPage,
  selectNote,
  addNote,
} from "../../../actions/NotebookActions";
var _this;
class Note extends Component {
  constructor(props) {
    super(props);
    this.selectNoteMethod = this.selectNoteMethod.bind(this);
    this.openNotebooksPageMethod = this.openNotebooksPageMethod.bind(this);
  }

  render() {
    _this = this;
    console.log(
      "this.props.selectedNoteBook.notes",
      this.props.selectedNoteBook.notes
    );
    return (
      <React.Fragment>
        {/* Notes */}
        <div className="notes-slider notebook-selected-">
          <div className="notebook-selected-header">
            <div className="back-arrow">
              <i
                className="bx bx-arrow-back"
                onClick={() => this.openNotebooksPageMethod()}
              ></i>
            </div>
            <SearchBox header={this.props.selectedNoteBook.label} />
          </div>
          <div className="secondary-sidenav-menu">
            {this.props.selectedNoteBook.notes.map(function (obj, index, ary) {
              console.log("obj hello ", obj);
              return (
                <div
                  className="notebook-header"
                  key={obj.id + "_parent"}
                  onClick={() => _this.selectNoteMethod(obj.id)}
                >
                  <div className="flex align-center">
                    <p>{obj.label}</p>
                    {obj.pin == "Y" ? (
                      <i className="starred bx bxs-star font-1rem"></i>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Add button */}
          <div className="secondary-sidenav-add">
            <div>
              <i
                className="bx bx-plus-circle"
                onClick={() => this.addNoteMethod()}
              ></i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  openNotebooksPageMethod() {
    this.props.openNotebooksPage();
  }
  selectNoteMethod(noteId) {
    this.props.selectNote(noteId);
  }
  addNoteMethod() {
    this.props.addNote();
  }
}

const mapStateToProps = (state) => {
  return {
    selectedNoteBook: state.selectedNotebook,
  };
};
const dispatchActionMap = (dispatch) => {
  return {
    openNotebooksPage: () => dispatch(openNotebooksPage()),
    selectNote: (noteId) => dispatch(selectNote(noteId)),
    addNote: () => dispatch(addNote()),
  };
};
export default connect(mapStateToProps, dispatchActionMap)(Note);
