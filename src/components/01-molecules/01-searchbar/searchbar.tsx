import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/reducers";

export default function Searchbar(): JSX.Element {
  const dispatch = useDispatch();
  // for adding item to shopping list
  const [item, setItem] = React.useState("");
  // for getting data using fetch
  const [data, setData] = React.useState([]);
  // for list of matching search
  const [matchList, setMatchList] = React.useState<any[]>([]);
  const [showMatchList, setShowMatchList] = React.useState(false);
  const createDOMPurify = require("dompurify");
  const { JSDOM } = require("jsdom");

  const window = new JSDOM("").window;
  const DOMPurify = createDOMPurify(window);

  let listEl = useRef(null);

  useEffect(() => {
    // getting data for autocomplete
    getData();
  }, []);
  function getData() {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }

  function searchItem(inp: string) {
    let matches = data.filter((item: { name: string }) => {
      const regex = new RegExp(`^${inp}`, "gi");
      return item.name.match(regex);
    });

    if (matches.length < 1) {
      setItem("");
      return;
    }
    setMatchList(matches);
    setShowMatchList(true);
  }

  // handle change on input
  function handleChange(e: { target: HTMLInputElement }) {
    e.target.value !== ""
      ? searchItem(e.target.value)
      : setShowMatchList(false);
    setItem(e.target.value);
  }

  // handles form submit
  function handleSubmit(e: any) {
    setShowMatchList(false);
    e.preventDefault();
    item ? addTodo(item) : alert("plaese enter item to list");
    if (!item.trim()) {
      return;
    }
    const cleanItem = DOMPurify.sanitize(item);

    dispatch(addTodo(cleanItem));
    setItem("");
  }

  function handleItemClick(i: any) {
    setItem(i);
    setShowMatchList(false);
  }

  return (
    <>
      <form className="form-group " onSubmit={handleSubmit}>
        <input
          className="form-field"
          id="search"
          ref={(input) => input && input.focus()}
          value={item}
          onChange={handleChange}
          placeholder="add something to the list.."
          autoComplete="off"
          name="myInput"
          autoFocus
          maxLength={20}
        />
        <button type="submit">Add</button>
      </form>
      {showMatchList && (
        <ul className="match-list" ref={listEl}>
          {matchList.map((match, i) => {
            return (
              <li
                className="match-list__item "
                key={i}
                onClick={() => handleItemClick(match.name)}
              >
                {/* <img src={process.env.PUBLIC_URL + '/download.png'}  height="30px"/>
                 */}
                <img
                  className="match-list__item-icon"
                  src={process.env.PUBLIC_URL + match.img}
                  height="25px"
                  alt=""
                />
                <p>{match.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
