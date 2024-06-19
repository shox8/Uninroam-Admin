import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiCall } from "../api-call";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    banLoader: false,
  },
  reducers: {
    getUsers: (state, { payload }) => {
      state.sellers = payload;
    },
    toggleLoader: (state, { payload }) => {
      state[payload] = !state[payload];
    },
    error: (state, { payload }) => {
      message.error(payload);
      state.banLoader = false;
    },
  },
});

const keys = { url: "/users", onFail: "users/error" };

export const getUsers = () => {
  return apiCall({ ...keys, method: "get", onSuccess: "users/getUsers" });
};

export const editUser = (data) => {
  return apiCall({
    ...keys,
    url: `/users/${data.id}`,
    method: "put",
    onSuccess: "users/editUser",
    data,
  });
};

export const { toggleLoader, logOut } = users.actions;
export default users.reducer;
