import React, { Component } from "react";
import "./Block.scss";
import ImageBlock from "./ImageBlock";
import HeaderBlock from "./HeaderBlock";
import CodeBlock from "./CodeBlock";

class Block extends Component {
  constructor(props) {
    super(props);
    console.log("Block:", this.props);
    this.renderBlockByType = this.renderBlockByType.bind(this);
  }

  renderBlockByType() {
    switch (this.props.type) {
      case "image":
        return <ImageBlock props={this.props} />;
      case "header":
        return <HeaderBlock props={this.props} />;
      case "code":
        return <CodeBlock props={this.props} />;
      default:
        console.log("type of block", this.props.type);
        <div
          contentEditable
          className={
            "block" +
            (this.props.type != null ? " " + this.props.type + "-block" : "")
          }
        >
          {this.props.content}
        </div>;
    }
  }

  render() {
    return <React.Fragment>{this.renderBlockByType()}</React.Fragment>;
  }

  onChange(imageList) {
    // data for submit
    console.log(imageList);
  }
  onError(errors, files) {
    console.log(errors, files);
  }
}

export default Block;
