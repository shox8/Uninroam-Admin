import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiCall } from "../api-call";

const auth = createSlice({
  name: "auth",
  initialState: {
    admin: {},
    loginLoader: false,
    forgotLoader: false,
    resetLoader: false,
  },
  reducers: {
    getAdmin: (state, { payload }) => {
      state.admin = payload;
    },
    login: (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      state.loginLoader = false;
      message.success("С возврашением").then(() => {
        window.location.pathname = "/";
      });
    },
    forgot: (state, { payload }) => {
      state.forgotLoader = false;
      message.success(payload).then(() => {
        window.location.pathname = "/reset";
      });
    },
    reset: (state, { payload }) => {
      state.resetLoader = false;
      message.success(payload).then(() => {
        window.location.pathname = "/login";
      });
    },
    toggleLoader: (state, { payload }) => {
      state[payload] = !state[payload];
    },
    error: (state, { payload }) => {
      message.error(payload);
      state.loginLoader = false;
      state.forgotLoader = false;
      state.resetLoader = false;
    },
  },
});

const keys = { onFail: "auth/error" };

export const getAdmin = (data) => {
  return apiCall({
    ...keys,
    url: "/admin",
    method: "get",
    onSuccess: "auth/getAdmin",
    data,
  });
};

export const login = (data) => {
  return apiCall({
    ...keys,
    url: "/admin/login",
    onSuccess: "auth/login",
    method: "post",
    data,
  });
};

export const forgot = (data) => {
  return apiCall({
    ...keys,
    url: "/admin/forgot",
    onSuccess: "auth/forgot",
    method: "post",
    data,
  });
};

export const reset = (data) => {
  return apiCall({
    ...keys,
    url: "/admin/reset",
    onSuccess: "auth/reset",
    method: "post",
    data,
  });
};

export const { toggleLoader } = auth.actions;
export default auth.reducer;
