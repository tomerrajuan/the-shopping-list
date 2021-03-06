import React from "react";
import ListItem from "../../00-atoms/03-item/item";
import { RootState } from "../../../redux/rootReducer";
import { useSelector } from "react-redux";

export default function List() {
  const items = useSelector((state: RootState) => state.items);

  return (
    <div className="list__item" id="style-1">
      <ul className="items-list">
        {items.map((todo) => {
          return <ListItem key={todo.id} {...todo} id={todo.id} />;
        })}
      </ul>
    </div>
  );
}
