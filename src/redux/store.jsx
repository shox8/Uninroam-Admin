import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import auth from "./reducers/auth";
import data from "./reducers/data";

const store = configureStore({
  reducer: { auth, data },
  middleware: () => [api],
});

export default store;
