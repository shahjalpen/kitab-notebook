import React, { Component } from "react";
import "./SearchBox.scss";
import VerticleDots from "../../components/VerticleDots/VerticleDots";

var maximizeClass = "";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    if (props.maximize == "Y") {
      this.maximizeClass = "maximize";
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick() {
    if (this.maximizeClass == "") {
      this.maximizeClass = "maximize";
    } else {
      this.maximizeClass = "";
    }
    this.setState({ maximizeClass: "maximize" });
  }

  render() {
    return (
      <React.Fragment>
        <div className="search-wrapper">
          <div className="flex-11 relative flex">
            <span className="search-header">
              <p>{this.props.header}</p>
            </span>
            <div className="search-flex">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search"
                  className={this.maximizeClass}
                ></input>
                <span>
                  <i
                    className="bx bx-search-alt"
                    onClick={
                      this.props.header != null ? this.handleSearchClick : null
                    }
                  ></i>
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <VerticleDots />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBox;
