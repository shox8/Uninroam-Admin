import axios from "axios";
import { baseUrl, headers } from "../../utils";

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== "api/apiCall") {
      next(action);
      return;
    }

    const { url, method, data, onSuccess, onFail } = action.payload;

    axios({
      baseURL: baseUrl(""),
      headers: headers,
      url,
      method,
      data,
    })
      .then((res) => {
        dispatch({ type: onSuccess, payload: res.data });
      })
      .catch((error) => {
        dispatch({
          type: onFail,
          payload: error.response?.data ? error.response.data : "Ошибка",
        });
      });
  };

export default api;
