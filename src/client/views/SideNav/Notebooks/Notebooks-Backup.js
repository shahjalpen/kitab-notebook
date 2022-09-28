import React, { Component } from "react";
import { connect } from "react-redux";
import "./Notebooks.scss";

import SearchBox from "../../../components/Search/SearchBox";
import {
  selectNotebook,
  selectNote,
  loadNotebooks,
  addNotebook,
} from "../../../actions/NotebookActions";

var sorted = {};
var _this;
class Notebooks extends Component {
  constructor(props) {
    super(props);
    this.openNote = this.openNote.bind(this);
    this.openNotebookMethod = this.openNotebookMethod.bind(this);
    this.addNotebookMethod = this.addNotebookMethod.bind(this);
    //this.sortNotebookByPin(this.props.notebooks);
  }

  componentDidMount() {
    //this.loadNotebooksMethod();
  }

  render() {
    _this = this;
    return (
      <React.Fragment>
        <div className="secondary-sidenav">
          {/* Notebooks */}
          <div className="notebook-slider notebooks-list">
            <SearchBox header="Notebooks" />
            {/*
            <div className="add-sort-filter-panel">
              <div className="add">
                {<i className="bx bx-plus-circle"></i>Add}
              </div>
              <div className="sort">
                <i className="bx bx-sort-down"></i>
              </div>
              <div className="filter">
                <i className="bx bx-filter-alt"></i>
              </div>
            </div>
            */}
            <div className="secondary-sidenav-menu">
              {this.props.notebooks.map(function (obj, index, ary) {
                return obj.isDeleted != "Y" ? (
                  <React.Fragment key={obj.id + "_fragment"}>
                    <div
                      className="notebook-header"
                      key={obj.id + "_parent"}
                      onClick={() => _this.openNotebookMethod(obj.id)}
                    >
                      <div className="flex align-center">
                        <p>
                          {obj.label} ({obj.notes})
                        </p>
                        {obj.pin == "Y" ? (
                          <i className="starred bx bxs-star font-1rem"></i>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={obj.id + "_fragment"}></React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Add button */}
          <div className="secondary-sidenav-add">
            <div>
              {/*<i className="bx bx-info-circle"></i>*/}
              <i
                className="bx bx-plus-circle"
                onClick={() => this.addNotebookMethod()}
              ></i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  loadNotebooksMethod() {
    console.log("Loading notebook list ", this.props.loadNotebooks());
    this.props.loadNotebooks();
  }

  openNote() {
    console.log("open note");
  }

  /*sortNotebookByPin(notebooks) {
    sorted["pin"] = [];
    sorted["unpin"] = [];
    notebooks.map((obj, index) => {
      if (obj.pin && obj.pin === "Y") {
        sorted["pin"].push(obj);
      } else {
        sorted["unpin"].push(obj);
      }
    });
  }*/

  openNotebookMethod(notebookId) {
    this.props.selectNotebook(notebookId);
  }
  addNotebookMethod() {
    this.props.addNotebook();
  }
}

const mapStateToProps = (state) => {
  return {
    notebooks: state.notebooks,
  };
};
const dispatchActionMap = (dispatch) => ({
  selectNotebook: (notebookId) => dispatch(selectNotebook(notebookId)),
  selectNote: (notebookId, noteId) => dispatch(selectNote(notebookId, noteId)),
  loadNotebooks: () => dispatch(loadNotebooks()),
  addNotebook: () => dispatch(addNotebook()),
});
export default connect(mapStateToProps, dispatchActionMap)(Notebooks);
