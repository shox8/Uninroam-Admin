import { createSlice } from "@reduxjs/toolkit";
import { baseUrl, headers } from "../../utils";
import { message } from "antd";
import axios from "axios";

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

export const getAdmin = () => {
  return (dispatch) => {
    axios
      .get(baseUrl("/admin"), headers)
      .then(({ data }) => {
        dispatch({ type: "auth/getAdmin", payload: data });
      })
      .catch(({ response }) => {
        dispatch({ type: "auth/error", payload: response.data });
      });
  };
};

export const login = (data) => {
  return (dispatch) => {
    axios
      .post(baseUrl("/admin/login"), data)
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
      .post(baseUrl("/admin/forgot"), data, headers)
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
      .post(baseUrl("/admin/reset"), data, headers)
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
