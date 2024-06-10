import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Router from "./Router";

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //   const id = localStorage.getItem("userId");
    //   if (id) {
    //     dispatch(getUser(id, "getUser"));
    //     dispatch(getProducts());
    //   } else {
    //     navigate("/login");
    //   }
  }, []);

  return <Router />;
}
