import React, { Component } from "react";
import "./CodeBlock.scss";
class CodeBlock extends Component {
  constructor(props) {
    super(props);
    console.log("Block:", this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div contentEditable className="block code-block">
          {this.props.props.content}
        </div>
      </React.Fragment>
    );
  }
}

export default CodeBlock;
