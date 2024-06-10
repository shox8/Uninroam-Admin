import { createSlice } from "@reduxjs/toolkit";
import { baseUrl, headers } from "../../utils";
import { message } from "antd";
import axios from "axios";

const auth = createSlice({
  name: "auth",
  initialState: {
    registerLoader: false,
    loginLoader: false,
    forgotLoader: false,
    resetLoader: false,
  },
  reducers: {
    register: (state, { payload }) => {
      localStorage.setItem("userId", payload.id);
      localStorage.setItem("token", payload.token);
      state.registerLoader = false;
      message.success("Вы авторизованы").then(() => {
        window.location.pathname = "/";
      });
    },
    login: (state, { payload }) => {
      localStorage.setItem("userId", payload.id);
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
      state.registerLoader = false;
      state.loginLoader = false;
      state.forgotLoader = false;
      state.resetLoader = false;
    },
  },
});

export const register = (data) => {
  return (dispatch) => {
    axios
      .post(baseUrl("/auth/register"), data)
      .then(({ data }) => {
        dispatch({ type: "auth/register", payload: data });
      })
      .catch(({ response }) => {
        dispatch({ type: "auth/error", payload: response.data });
      });
  };
};

export const login = (data) => {
  return (dispatch) => {
    axios
      .post(baseUrl("/auth/login"), data)
      .then(({ data }) => {
        dispatch({ type: "auth/login", payload: data });
      })
      .catch(({ response }) => {
        dispatch({ type: "auth/error", payload: response.data });
      });
  };
};

export const forgot = (data) => {
  return (dispatch) => {
    axios
      .post(baseUrl("/auth/forgot"), data, headers)
      .then(({ data }) => {
        dispatch({ type: "auth/forgot", payload: data });
      })
      .catch(({ response }) => {
        dispatch({ type: "auth/error", payload: response.data });
      });
  };
};

export const reset = (data) => {
  return (dispatch) => {
    axios
      .post(baseUrl("/auth/reset"), data, headers)
      .then(({ data }) => {
        dispatch({ type: "auth/reset", payload: data });
      })
      .catch(({ response }) => {
        dispatch({ type: "auth/error", payload: response.data });
      });
  };
};

export const { toggleLoader } = auth.actions;
export default auth.reducer;
