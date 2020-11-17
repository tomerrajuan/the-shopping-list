import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "./store";
import { Todo } from "./actions";

const initialState: Todo[] = [];

const itemslice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // add item to list
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    // delete item from list
    deleteTodo(state, action: PayloadAction<Todo>) {
      state.splice(
        state.findIndex((v) => v.id === action.payload.id),
        1
      );
    },
    // we’re filtering for the todo to toggle, and updating it directly.
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// toggleTodo export
export const { toggleTodo } = itemslice.actions;
// addTodo export
export const addTodo = (text: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  const newTodo: Todo = {
    id: Math.random().toString(36).substr(2, 9),
    completed: false,
    text: text,
  };
  dispatch(itemslice.actions.addTodo(newTodo));
};
// deleteTodo export
// export const { deleteTodo } = itemslice.actions;

export const deleteTodo = (id: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  const plsDelete: Todo = {
    id: id,
    text: "text",
    completed: false,
  };
  dispatch(itemslice.actions.deleteTodo(plsDelete));
};

export default itemslice.reducer;
