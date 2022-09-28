import React, { Component } from 'react';
import Note from './Notebooks/Note';
import Welcome from './Welcome/Welcome';

import { connect } from 'react-redux';
import './Content.scss';
class Content extends Component {
  constructor(props) {
    super(props);
    this.renderContentPage = this.renderContentPage.bind(this);
  }

  render() {
    return <div className="kitab-content">{this.renderContentPage(this.props.contentPage.type)}</div>;
  }

  renderContentPage(param) {
    switch (param) {
      case 'Welcome':
        return <Welcome />;
      case 'Note':
        return <Note />;
      default:
        return 'Welcome';
    }
  }
}

const mapStateToProps = (state) => {
  return {
    contentPage: state.contentPage,
  };
};
const dispatchActionMap = (dispatch) => ({});
export default connect(mapStateToProps, dispatchActionMap)(Content);
