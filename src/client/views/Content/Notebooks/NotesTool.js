import React, { Component } from "react";
import { render } from "react-dom";

import "./NotesTool.scss";

var content;
class NotesTool extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-notes-tool">
        <div className="notes-tool">
          <i className="bx bx-image"></i>
          <div className="notes-tooltip">Image</div>
        </div>
        <div className="notes-tool">
          <i className="bx bx-heading"></i>
          <div className="notes-tooltip">Heading</div>
        </div>
        <div className="notes-tool">
          <i className="bx bx-list-ol"></i>
          <div className="notes-tooltip">List</div>
        </div>
        <div className="notes-tool">
          <i className="bx bx-checkbox-checked"></i>
          <div className="notes-tooltip">Checkbox</div>
        </div>
        <div className="notes-tool">
          <i className="bx bx-code"></i>
          <div className="notes-tooltip">Code</div>
        </div>
        <div className="notes-tool">
          <i className="bx bx-table"></i>
          <div className="notes-tooltip">Table</div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
export default NotesTool;
