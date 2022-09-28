import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import EditorJS from '@editorjs/editorjs';
//import Embed from "@editorjs/embed";
const Embed = require('@editorjs/embed');
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';
import AttachesTool from '@editorjs/attaches';
import Shortcut from '@codexteam/shortcuts';

import './Editorjs-Custom.scss';

class EditorInstance extends Component {
  constructor(props) {
    super(props);
    console.log('Check this ', props);
    this.saveData = this.saveData.bind(this);
    this.changeNoteHeaderMethod = this.changeNoteHeaderMethod.bind(this);
    this.editorInstance;
    this.editor;
  }

  componentDidMount() {
    console.log('Loaded Kitab page!');
    console.log(this.props.contentPageDetails);
    console.log(this.props.selectedNotebook);
  }

  render() {
    console.log('Calling reander methide');

    //Shortcuts
    let exportToPDF = new Shortcut({
      name: 'CMD+Shift+P',
      on: document.body,
      callback: function (event) {
        alert('Exporting to PDF..!');
        event.preventDefault();
      },
    });

    if (this.props.contentPage != null && this.props.contentPage.content != null && this.props.contentPage.content.content != null) {
      console.log('setting data', this.props.contentPage.content.content);
      //Loading editor object
      if (this.editor != undefined) {
        console.log(this.editor);
        this.editor.destroy();
      }
      this.editor = new EditorJS({
        holder: 'editor-block-inner',
        data: this.props.contentPage.content.content,
        tools: {
          table: Table,
          list: List,
          code: Code,
          linkTool: LinkTool,
          image: {
            class: Image,
            config: {
              endpoints: {
                byFile: 'http://localhost:8080/api/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8080/api/fetchUrl', // Your endpoint that provides uploading by Url
              },
            },
          },
          raw: Raw,
          header: Header,
          quote: Quote,
          marker: Marker,
          checklist: CheckList,
          delimiter: Delimiter,
          inlineCode: InlineCode,
          simpleImage: SimpleImage,
          attachesTool: AttachesTool,
          embed: {
            class: Embed,
            inlineToolbar: true,
            config: {
              services: {
                youtube: true,
                coub: true,
                codepen: {
                  regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                  embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
                  html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                  height: 300,
                  width: 600,
                  id: (groups) => groups.join('/embed/'),
                },
              },
            },
          },
        },
        logLevel: 'ERROR',
        onReady: () => {
          console.log('Editor.js is ready to work!');
        },
        onChange: () => this.saveData(),
        placeholder: 'Start typing..',
      });
    }

    return (
      <div className="content-editor">
        <div className="content-block">
          <div className="editor-block-header" placeholder="Title">
            <div>
              <span className="notes-header" onChange={() => changeNoteHeaderMethod()}>
                {this.props.contentPage.content != null && this.props.contentPage.content.label != null ? this.props.contentPage.content.label : ''}
              </span>
            </div>
            <div className="notes-extra">
              <span onClick={() => addCoverPicOnNoteMethod()}>Add cover pic</span>
              <span>Add properties</span>
            </div>
          </div>
          <div id="editor-block-inner"></div>
        </div>
      </div>
    );
  }

  saveData() {
    this.editor
      .save()
      .then((outputData) => {
        this.pushMessageToQueue(outputData);
      })
      .catch((error) => {
        alert('Failed to save data', JSON.format(error));
      });
  }

  pushMessageToQueue(outputData) {
    console.log('Pushing message to queue!', outputData);
  }

  changeNoteHeaderMethod(e) {
    console.log('Change header:', e);
    this.props.changeNoteHeader('hello');
  }
}
const mapStateToProps = (state) => {
  return {
    contentPage: state.contentPage,
  };
};
const dispatchActionMap = (dispatch) => ({
  changeNoteHeader: (header) => dispatch(changeNoteHeader(header)),
  updateNoteContent: (content) => dispatch(updateNoteContent(content)),
});
export default connect(mapStateToProps, dispatchActionMap)(EditorInstance);
