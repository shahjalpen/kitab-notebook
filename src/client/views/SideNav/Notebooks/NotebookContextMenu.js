import React, { Component } from "react";
import { connect } from "react-redux";
import "./Notebooks.scss";

class NotebookContextMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>asd</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const dispatchActionMap = (dispatch) => ({});
export default connect(mapStateToProps, dispatchActionMap)(NotebookContextMenu);
