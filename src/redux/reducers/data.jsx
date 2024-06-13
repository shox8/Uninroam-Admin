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
    },
    addCategory: (state, { payload }) => {
      state.categories.push(payload);
      message.success("Добавлен");
    },
    updateCategory: (state, { payload }) => {
      state.categories.map((item, index) => {
        if (item.id === payload.id) {
          state.categories.splice(index, 1, payload);
          message.success("Изменен");
        }
      });
    },
    removeCategory: (state, { payload }) => {
      state.categories.map((item, index) => {
        if (item.id === payload) {
          state.categories.splice(index, 1);
          message.success("Удален");
        }
      });
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

export const addCategory = (data) => {
  return apiCall({
    ...keys,
    url: "data/categories",
    method: "post",
    onSuccess: "data/addCategory",
    data,
  });
};

export const updateCategory = (data) => {
  return apiCall({
    ...keys,
    url: `data/categories/${data.id}`,
    method: "put",
    onSuccess: "data/updateCategory",
    data,
  });
};

export const removeCategory = (id) => {
  return apiCall({
    ...keys,
    url: `data/categories/${id}`,
    method: "delete",
    onSuccess: "data/removeCategory",
  });
};

export const { toggleLoader } = data.actions;
export default data.reducer;
