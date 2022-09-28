import React, { Component } from "react";
import "./ImageBlock.scss";
import { Resizable } from "re-resizable";
import ImageUploading from "react-images-uploading";

const maxNumber = 1;
const maxMbFileSize = 2 * 1024 * 1024; // 5Mb

class ImageBlock extends Component {
  constructor(props) {
    super(props);
    console.log("Block:", this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={
            "block" +
            (this.props.props.type != null
              ? " " + this.props.props.type + "-block"
              : "")
          }
        >
          <ImageUploading
            onChange={this.onChange}
            maxNumber={maxNumber}
            multiple={false}
            maxFileSize={maxMbFileSize}
            acceptType={["jpg", "gif", "png"]}
            onError={this.onError}
            styleClass="helo"
          >
            {({ imageList, onImageUpload, onImageRemoveAll }) => (
              // write your building UI
              <Resizable>
                <div>
                  <span
                    className="image-block-add-image"
                    onClick={onImageUpload}
                  >
                    Add Image
                  </span>
                  {imageList.map((image) => (
                    <div className="image-block-container" key={image.key}>
                      <img className="image-block-img" src={image.dataURL} />
                      <span
                        onClick={image.onRemove}
                        className="image-block-close"
                      >
                        <i className="bx bxs-x-circle"></i>
                      </span>
                    </div>
                  ))}
                </div>
              </Resizable>
            )}
          </ImageUploading>
        </div>
      </React.Fragment>
    );
  }

  onChange(imageList) {
    // data for submit
    console.log(imageList);
  }
  onError(errors, files) {
    console.log(errors, files);
  }
}

export default ImageBlock;
