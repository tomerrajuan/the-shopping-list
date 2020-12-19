import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../redux/reducers";

interface TodoProps {
  id: string;
}

export default function DeleteButton({ id }: TodoProps) {
  const dispatch = useDispatch();

  function deleteItem(id: any) {
    dispatch(deleteTodo(id));
  }

  return (
    <button className="delete__button" onClick={() => deleteItem(id)}>
      Remove
    </button>
  );
}
