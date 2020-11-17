import React from "react";
import DeleteButton from "../delete-button/delete-button";

interface TodoProps {
  completed: boolean;
  text: string;
  id: string;
}

export default function ListItem({ completed, text, id }: TodoProps) {
  return (
    <li className="items-list__item">
      <div>
        <input type="checkbox" />
        <p> {text}</p>
      </div>
      <DeleteButton id={id} />
    </li>
  );
}
