"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _autolinker = require("autolinker");

var _autolinker2 = _interopRequireDefault(_autolinker);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var ReactAutolinker = (function (_React$Component) {
  _inherits(ReactAutolinker, _React$Component);

  function ReactAutolinker() {
    _classCallCheck(this, ReactAutolinker);

    _get(Object.getPrototypeOf(ReactAutolinker.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ReactAutolinker, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var options = _props.options;
      var text = _props.text;
      var renderLink = _props.renderLink;
      var tagName = _props.tagName;

      var tags = [];
      _autolinker2["default"].link(text, _extends({}, options, {
        replaceFn: function replaceFn(autolinker, match) {
          var tag = autolinker.getTagBuilder().build(match);
          tag.matchedText = match.matchedText;
          tags.push(tag);
          return tag;
        }
      }));

      var _text = text;
      var children = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;

          var splitText = tag.matchedText;

          var parts = _text.split(splitText);
          if (tag.attrs && tag.attrs["class"]) {
            tag.attrs.className = tag.attrs["class"];
            delete tag.attrs["class"];
          }
          tag.attrs.key = tag.attrs.href + "-" + tags.indexOf(tag);
          children.push(parts.shift());
          children.push(renderLink(tag));
          _text = parts.join(tag.matchedText);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      children.push(_text);

      var props = _extends({}, this.props);
      var _arr = ["text", "options", "renderLink", "tagName"];
      for (var _i = 0; _i < _arr.length; _i++) {
        var prop = _arr[_i];
        delete props[prop];
      }
      return _react2["default"].createElement(tagName, props, children);
    }
  }], [{
    key: "propTypes",
    value: {
      options: _propTypes2["default"].object,
      renderLink: _propTypes2["default"].func,
      tagName: _propTypes2["default"].string
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      options: {},
      renderLink: function renderLink(tag) {
        return _react2["default"].createElement(tag.tagName, tag.attrs, tag.innerHtml);
      },
      tagName: 'div'
    },
    enumerable: true
  }]);

  return ReactAutolinker;
})(_react2["default"].Component);

exports["default"] = ReactAutolinker;
module.exports = exports["default"];