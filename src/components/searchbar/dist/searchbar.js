"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var reducers_1 = require("../../redux/reducers");
function Searchbar() {
    var dispatch = react_redux_1.useDispatch();
    // for adding item to shopping list
    var _a = react_1["default"].useState(""), item = _a[0], setItem = _a[1];
    // for getting data using fetch
    var _b = react_1["default"].useState([]), data = _b[0], setData = _b[1];
    // for list of matching search
    var _c = react_1["default"].useState([]), matchList = _c[0], setMatchList = _c[1];
    var _d = react_1["default"].useState(false), showMatchList = _d[0], setShowMatchList = _d[1];
    var listEl = react_1.useRef(null);
    react_1.useEffect(function () {
        // getting data for autocomplete
        getData();
    }, []);
    function getData() {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(function (response) {
            console.log(response);
            return response.json();
        })
            .then(function (data) {
            setData(data);
        });
    }
    function searchItem(inp) {
        var matches = data.filter(function (item) {
            var regex = new RegExp("^" + inp, "gi");
            return item.name.match(regex);
        });
        console.log("matches are: ", matches);
        if (matches.length < 1) {
            console.log("we are here");
            setItem("");
            return;
        }
        setMatchList(matches);
        setShowMatchList(true);
    }
    // handle change on input
    function handleChange(e) {
        e.target.value !== ""
            ? searchItem(e.target.value)
            : setShowMatchList(false);
        setItem(e.target.value);
    }
    // handles form submit
    function handleSubmit(e) {
        e.preventDefault();
        item ? reducers_1.addTodo(item) : alert("plaese enter item to list");
        if (!item.trim()) {
            return;
        }
        dispatch(reducers_1.addTodo(item));
        setItem("");
    }
    function handleItemClick(i) {
        setItem(i);
        setShowMatchList(false);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("form", { className: "form-group ", onSubmit: handleSubmit },
            react_1["default"].createElement("input", { className: "form-field", id: "search", ref: function (input) { return input && input.focus(); }, value: item, onChange: handleChange, placeholder: "add something to the list..", autoComplete: "off", name: "myInput", autoFocus: true, maxLength: 20 }),
            react_1["default"].createElement("button", { type: "submit" }, "Add")),
        showMatchList && (react_1["default"].createElement("ul", { className: "list-group list-group-flush match-list", ref: listEl, id: "style-1" }, matchList.map(function (match, i) {
            return (react_1["default"].createElement("li", { className: "match-list__item ", key: i, onClick: function () { return handleItemClick(match.name); } }, match.name));
        })))));
}
exports["default"] = Searchbar;
