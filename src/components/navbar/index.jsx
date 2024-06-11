import React, { useState } from "react";
import { Style } from "./style";
import { Button, Popconfirm } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <Style open={menuOpen}>
      <div className="brand">
        <Link className="logo" to="/">
          <img src={require("../../assets/logo.png")} />
          <h2>Uninroam</h2>
        </Link>
        <Button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <GoX /> : <CgMenuRight />}
        </Button>
      </div>
      <div className="line">
        <Link to={"/categories"} title="">
          Категории
        </Link>
        <Popconfirm
          onConfirm={logout}
          title="Вы хотите выйти?"
          okText="Да"
          cancelText="Нет"
        >
          <Button>Выйти</Button>
        </Popconfirm>
      </div>
    </Style>
  );
}
