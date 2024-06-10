import React from "react";
import { Block } from "./style";

export default function Loader({ w, h }) {
  return (
    <Block w={w} h={h}>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </Block>
  );
}
