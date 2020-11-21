"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var item_1 = require("../item/item");
var react_redux_1 = require("react-redux");
function List() {
    var items = react_redux_1.useSelector(function (state) { return state.items; });
    return (react_1["default"].createElement("div", { className: "list__item", id: "style-1" },
        react_1["default"].createElement("ul", { className: "items-list" }, items.map(function (todo) {
            return react_1["default"].createElement(item_1["default"], __assign({ key: todo.id }, todo, { id: todo.id }));
        }))));
}
exports["default"] = List;
