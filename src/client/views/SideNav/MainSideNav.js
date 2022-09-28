import React, { Component } from "react";

import SearchBox from "../../components/Search/SearchBox";
import Header from "../Header/Header";
import { connect } from "react-redux";
import "./MainSideNav.scss";

import {
  toggleMainMenu,
  selectMainMenu,
  openSecondaryMenu,
  openSettingsPage,
  loadMainMenuItems,
} from "../../actions/MainMenuAction";

var _this;
class MainSideNav extends Component {
  constructor(props) {
    super(props);
    this.toggleMainMenuMethod = this.toggleMainMenuMethod.bind(this);
    this.openSecondaryMenuMethod = this.openSecondaryMenuMethod.bind(this);
    this.openSettingsPageMethod = this.openSettingsPageMethod.bind(this);
    this.loadMainMenuItemsMethod = this.loadMainMenuItemsMethod.bind(this);
  }

  componentDidMount() {
    this.loadMainMenuItemsMethod();
  }

  render() {
    _this = this;

    return (
      <div
        className={
          "main-sidenav-container" +
          (this.props.menuCollapse ? " collapse" : "")
        }
      >
        <div className="main-sidenav">
          <Header />
          {this.props.menuCollapse ? (
            <div
              className="main-search-icon"
              onClick={() => this.toggleMainMenuMethod()}
            >
              <span>
                <i className="bx bx-search-alt"></i>
              </span>
            </div>
          ) : (
            <SearchBox maximize="Y" />
          )}
          <div className="main-sidenav-menu">
            {this.props.menuItem.map(function (obj, index) {
              return (
                <div
                  key={obj.id}
                  className={
                    "main-sidenav-menuitem" +
                    (!obj.isFunctional ? " disabled" : "")
                  }
                  onClick={() => _this.openSecondaryMenuMethod(obj)}
                >
                  <div>
                    <i className={obj.icon}></i>
                    <div className="tooltip">{obj.label}</div>
                  </div>
                  <div className="menu-item-label">{obj.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Settings icon */}
        <div className="main-sidenav-settings">
          <div className="main-sidenav-menuitem">
            <div onClick={() => this.openSettingsPageMethod()}>
              <i className="bx bx-slider"></i>
              <div className="tooltip">Settings</div>
            </div>
            <div className="menu-item-label">Settings</div>
          </div>
        </div>
      </div>
    );
  }

  toggleMainMenuMethod() {
    this.props.toggleMainMenu();
  }

  openSettingsPageMethod() {
    console.log("openSettingsPageMethod");
    this.props.openSettingsPage();
  }

  openSecondaryMenuMethod(obj) {
    console.log("Opening secondary menu.. ", obj);
    if (obj.isFunctional) this.props.openSecondaryMenu(obj.id);
  }

  loadMainMenuItemsMethod() {
    console.log("triggering loadMainMenuItemsMethod");
    this.props.loadMainMenuItems();
  }
}

const mapStateToProps = (state) => {
  return {
    menuItem: state.menuItem,
    menuCollapse: state.mainMenuCollapse,
  };
};
const dispatchActionMap = (dispatch) => {
  return {
    loadMainMenuItems: () => dispatch(loadMainMenuItems()),
    toggleMainMenu: () => dispatch(toggleMainMenu()),
    selectMainMenu: () => dispatch(selectMainMenu()),
    openSecondaryMenu: (menuId) => dispatch(openSecondaryMenu(menuId)),
    openSettingsPage: () => dispatch(openSettingsPage()),
  };
};
export default connect(mapStateToProps, dispatchActionMap)(MainSideNav);
