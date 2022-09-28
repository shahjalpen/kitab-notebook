import React, { Component } from "react";
import { connect } from "react-redux";
import "./Settings.scss";

import { closeSettingsPage } from "../../../actions/MainMenuAction";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.closeSettingsPageMethod = this.closeSettingsPageMethod.bind(this);
  }

  render() {
    return (
      <div
        className={
          "settings-container " + (this.props.settingsModal ? "show" : "hide")
        }
      >
        <div className="settings-block">
          <div className="header-bar">
            <div className="label">
              <span>Settings</span>
            </div>
            <div
              className="close"
              onClick={() => this.closeSettingsPageMethod()}
            >
              <i className="bx bx-x"></i>
            </div>
          </div>
          <div className="header-content">
            <div className="key">Font-Family</div>
            <div className="value">Quicksand</div>
            <div className="key">Theme</div>
            <div className="value">Basic</div>
            <div className="key">Font-Size</div>
            <div className="value">1rem</div>
          </div>
        </div>
      </div>
    );
  }

  closeSettingsPageMethod() {
    this.props.closeSettingsPage();
  }
}

const mapStateToProps = (state) => {
  return {
    settingsModal: state.settingsModal,
  };
};
const dispatchActionMap = (dispatch) => {
  return {
    closeSettingsPage: () => dispatch(closeSettingsPage()),
  };
};
export default connect(mapStateToProps, dispatchActionMap)(Settings);
