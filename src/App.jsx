import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdmin } from "./redux/reducers/auth";
import Router from "./Router";

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getAdmin());
    } else {
      navigate("/login");
    }
  }, []);

  return <Router />;
}
