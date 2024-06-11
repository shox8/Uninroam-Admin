import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import auth from "./reducers/auth";
import data from "./reducers/data";

const store = configureStore({
  reducer: { auth, data },
  middleware: () => [thunk],
});

export default store;
