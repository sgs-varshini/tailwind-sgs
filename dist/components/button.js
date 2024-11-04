"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-blue-500 text-white font-bold py-2 px-4 rounded ".concat(className),
    onClick: onClick
  }, children);
};
var _default = exports["default"] = Button;