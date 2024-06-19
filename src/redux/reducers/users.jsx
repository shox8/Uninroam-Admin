import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiCall } from "../api-call";
import { TR } from "../../data/lang";

const users = createSlice({
  name: "users",
  initialState: {
    user: {},
    seller: {},
    sellers: [],
    userLoader: false,
  },
  reducers: {
    getUsers: (state, { payload }) => {
      state.sellers = payload;
    },
    getUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("userType", payload.type);
    },
    getSeller: (state, { payload }) => {
      state.seller = payload;
    },
    editUser: (state, { payload }) => {
      state.user = payload;
      state.userLoader = false;
      localStorage.setItem("userType", payload.type);
      message.success(TR("users.edit"));
    },
    logOut: (state) => {
      state.user = {};
    },
    toggleLoader: (state, { payload }) => {
      state[payload] = !state[payload];
    },
    error: (state, { payload }) => {
      message.error(payload);
      state.userLoader = false;
    },
  },
});

const keys = { url: "/users", onFail: "users/error" };

export const getUsers = () => {
  return apiCall({ ...keys, method: "get", onSuccess: "users/getUsers" });
};

export const getUser = (id, reducer) => {
  return apiCall({
    url: `/users/${id}`,
    method: "get",
    onSuccess: `users/${reducer}`,
    onFail: "users/error",
  });
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
