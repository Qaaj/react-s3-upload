"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = require("./upload");

function ReactS3Upload(props) {

  var _inputChanged = function _inputChanged(event) {

    var file = event.target.files[0];

    var progress_handler = function progress_handler(evt) {
      console.log(evt);
    };

    if (file == null) {
      console.error("No file selected.");
    } else {
      (0, _upload.sign_and_upload)({ file: file, progress_handler: props.onProgress }).then(function (URL) {
        if (props.onProgress) props.onComplete(URL);
      }).catch(function (err) {
        console.error("Something went wrong: " + err);
      });
    }
  };

  return React.createElement(
    "div",
    null,
    React.createElement("input", { id: "file_input", onChange: _inputChanged, label: "Image Upload", type: "file", id: "file_input" })
  );
}

exports.default = ReactS3Upload;