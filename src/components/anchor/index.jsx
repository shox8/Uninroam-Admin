import React from "react";
import { Style } from "./style";
import { useNavigate } from "react-router-dom";

export default function Anchor({ text, route, routeName }) {
  const navigate = useNavigate();

  return (
    <Style>
      {text}
      <b onClick={() => navigate(route)}>{routeName}</b>
    </Style>
  );
}
