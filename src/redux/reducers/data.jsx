import { createSlice } from "@reduxjs/toolkit";
import { baseUrl, headers } from "../../utils";
import { message } from "antd";
import axios from "axios";

const data = createSlice({
  name: "data",
  initialState: {
    categories: [],
    categoriesLoader: false,
  },
  reducers: {
    getCategories: (state, { payload }) => {
      state.categories = payload;
      console.log(payload);
    },
    toggleLoader: (state, { payload }) => {
      state[payload] = !state[payload];
    },
    error: (state, { payload }) => {
      message.error(payload);
      state.categoriesLoader = false;
    },
  },
});

export const getCategories = () => {
  return (dispatch) => {
    axios
      .get(baseUrl("/data/categories"), headers)
      .then(({ data }) => {
        dispatch({ type: "data/getCategories", payload: data });
      })
      .catch(({ response }) => {
        dispatch({ type: "data/error", payload: response.data });
      });
  };
};

export const { toggleLoader } = data.actions;
export default data.reducer;
