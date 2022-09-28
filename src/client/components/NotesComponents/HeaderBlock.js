import React, { Component } from "react";
import "./HeaderBlock.scss";
class HeaderBlock extends Component {
  constructor(props) {
    super(props);
    console.log("Block:", this.props);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
  }

  onMouseUp() {
    console.log("on mouse up");
  }
  onDoubleClick() {
    console.log("on doucleclick");
  }

  render() {
    return (
      <React.Fragment>
        <div class="header-component-container">
          <div
            contentEditable
            className={
              "block " +
              (this.props.props.headerType == null
                ? "header1"
                : this.props.props.headerType + "-block")
            }
          >
            <span
              onMouseUp={this.onMouseUp()}
              onDoubleClick={this.onDoubleClick()}
            >
              {this.props.props.content}
            </span>
          </div>
          <div className="block-extra">
            <div>
              <span className="bold">B</span>
            </div>
            <div>
              <span className="italics">i</span>
            </div>
            <div>
              <span className="underline">U</span>
            </div>
            <div>
              <span className="strike">S</span>
            </div>
            <div>
              <span className="link">Link</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderBlock;
