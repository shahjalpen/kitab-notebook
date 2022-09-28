import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideNav from '../SideNav/SideNav';
import Content from '../Content/Content';
import Settings from '../Content/Common/Settings';

import './AppWrapper.scss';
class AppWrapper extends Component {
  render() {
    return (
      <div className="app-container">
        <SideNav />
        <Content />
        <Settings />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const dispatchActionMap = (dispatch) => ({});
export default connect(mapStateToProps, dispatchActionMap)(AppWrapper);
