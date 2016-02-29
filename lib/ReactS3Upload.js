'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _upload = require('./upload');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactS3Upload = function (_React$Component) {
  _inherits(ReactS3Upload, _React$Component);

  function ReactS3Upload(props) {
    _classCallCheck(this, ReactS3Upload);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactS3Upload).call(this, props));

    _this.state = {};
    _this._inputChanged = _this._inputChanged.bind(_this);
    return _this;
  }

  _createClass(ReactS3Upload, [{
    key: '_inputChanged',
    value: function _inputChanged(event) {

      var file = event.target.files[0];

      var progress_handler = function progress_handler(evt) {
        console.log(evt);
      };

      if (file == null) {
        console.error("No file selected.");
      } else {
        (0, _upload.sign_and_upload)({ file: file, progress_handler: progress_handler }).then(function (URL) {
          console.log(URL);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { id: 'file_input', onChange: this._inputChanged, label: 'Image Upload', type: 'file', id: 'file_input' })
      );
    }
  }]);

  return ReactS3Upload;
}(_react2.default.Component);

ReactS3Upload.displayName = 'ReactS3Upload';

exports.default = ReactS3Upload;