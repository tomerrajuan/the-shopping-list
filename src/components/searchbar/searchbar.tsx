import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers";

export default function Searchbar(): JSX.Element {
  const dispatch = useDispatch();
  // for adding item to shopping list
  const [item, setItem] = React.useState("");
  // for getting data using fetch
  const [data, setData] = React.useState([]);
  // for list of matching search
  const [matchList, setMatchList] = React.useState<any[]>([]);
  const [showMatchList, setShowMatchList] = React.useState(false);

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
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }

  function searchItem(inp: string) {
    console.log("data is: ", data);
    let matches = data.filter((item: { name: string }) => {
      const regex = new RegExp(`^${inp}`, "gi");
      return item.name.match(regex);
    });
    if (data.length === 0) {
      matches = [];
      setItem("");
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
    e.preventDefault();
    item ? addTodo(item) : alert("plaese enter item to list");
    if (!item.trim()) {
      return;
    }
    dispatch(addTodo(item));
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
        <ul
          className="list-group list-group-flush match-list"
          ref={listEl}
          id="style-1"
        >
          {matchList.map((match, i) => (
            <li
              className="match-list__item "
              key={i}
              onClick={() => handleItemClick(match.name)}
            >
              <img src="cart-outline.svg" alt="" height="15px" />
              {match.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
