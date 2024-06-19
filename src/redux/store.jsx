import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import auth from "./reducers/auth";
import data from "./reducers/data";
import users from "./reducers/users";

const store = configureStore({
  reducer: { auth, data, users },
  middleware: () => [api],
});

export default store;
