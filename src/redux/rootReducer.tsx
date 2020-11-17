import { combineReducers } from "@reduxjs/toolkit";

import items from "./reducers";

import visibilityFilter from "./visibilityFilterSlice";

const rootReducer = combineReducers({
  items,

  visibilityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
