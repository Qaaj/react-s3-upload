"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign_and_upload = sign_and_upload;
function sign_and_upload(_ref) {
  var file = _ref.file;
  var progress_handler = _ref.progress_handler;

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/sign_s3?file_name=" + file.name + "&file_type=" + file.type);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          upload_file(file, response.signed_request, response.url, resolve, reject, progress_handler);
        } else {
          reject("Could not get signed URL");
        }
      }
    };
    xhr.send();
  });
}

function upload_file(file, signed_request, url, resolve, reject, progress_handler) {

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", signed_request);
  xhr.setRequestHeader('x-amz-acl', 'public-read');

  xhr.upload.onprogress = function (evt) {
    if (evt.lengthComputable && progress_handler) {
      progress_handler(evt.loaded / evt.total * 100);
    }
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(url);
    }
  };

  xhr.onerror = function (err) {
    reject(err);
    window.error("Could not upload file. " + err);
  };

  xhr.send(file);
}