import React, { Component } from "react";

import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { connect } from "react-redux";

import { toggleMainMenu } from "../../actions/MainMenuAction";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="logo">Kitab</div>
          <div className="user-details">
            <div
              className={this.props.menuCollapse ? "menu-collapse" : ""}
              onClick={() => this.toggleMainMenuMethod()}
            >
              <i className="menu-collapse-backbutton bx bx-arrow-back"></i>
            </div>
            <UserCircle />
          </div>
        </div>
      </div>
    );
  }

  toggleMainMenuMethod() {
    console.log("toggleMainMenuMethod menu");
    this.props.toggleMainMenu();
    console.log("toggleMainMenuMethod men1u");
  }
}
const mapStateToProps = (state) => {
  return {
    menuCollapse: state.mainMenuCollapse,
  };
};
const dispatchActionMap = (dispatch) => {
  return {
    toggleMainMenu: () => dispatch(toggleMainMenu()),
  };
};
export default connect(mapStateToProps, dispatchActionMap)(Header);
