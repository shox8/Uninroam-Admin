import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiCall } from "../api-call";

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

const keys = { onFail: "data/error" };

export const getCategories = () => {
  return apiCall({
    ...keys,
    url: "data/categories",
    method: "get",
    onSuccess: "data/getCategories",
  });
};

export const { toggleLoader } = data.actions;
export default data.reducer;
