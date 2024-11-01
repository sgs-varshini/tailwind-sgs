"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTable = require("@tanstack/react-table");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// table.jsx

var Table = function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data;
  // Initialize table instance with columns and data
  var table = (0, _reactTable.useReactTable)({
    columns: columns,
    data: data,
    getCoreRowModel: (0, _reactTable.getCoreRowModel)()
  });
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "table-auto w-full border"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, table.getHeaderGroups().map(function (headerGroup) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: headerGroup.id
    }, headerGroup.headers.map(function (header) {
      return /*#__PURE__*/_react["default"].createElement("th", {
        key: header.id,
        className: "border px-4 py-2 bg-gray-100"
      }, header.isPlaceholder ? null : (0, _reactTable.flexRender)(header.column.columnDef.header, header.getContext()));
    }));
  })), /*#__PURE__*/_react["default"].createElement("tbody", null, table.getRowModel().rows.map(function (row) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: row.id,
      className: "hover:bg-gray-100"
    }, row.getVisibleCells().map(function (cell) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: cell.id,
        className: "border px-4 py-2"
      }, (0, _reactTable.flexRender)(cell.column.columnDef.cell, cell.getContext()));
    }));
  })));
};
var _default = exports["default"] = Table;