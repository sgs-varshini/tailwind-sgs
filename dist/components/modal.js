"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white p-6 rounded"
  }, children, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "mt-4 bg-red-500 text-white px-4 py-2 rounded"
  }, "Close")));
};
var _default = exports["default"] = Modal;