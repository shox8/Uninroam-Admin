import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import auth from "./reducers/auth";

const store = configureStore({
  reducer: { auth },
  middleware: () => [thunk],
});

export default store;
