import React, { useState } from "react";
import { Style } from "./style";
import { Button } from "antd";
import { IoAddCircle } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { SandB } from "../../utils";
import { GoX } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import ProductCreator from "../../content/productCreator";
import Cart from "../../content/cart";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

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
        {SandB(
          "",
          <div>
            <Link to="/sellers">Продавцы</Link>
            <Link to="/products">Товары</Link>
          </div>
        )}
        <div>
          {SandB(
            <Button
              icon={<IoAddCircle />}
              onClick={() => setCreateModal(!createModal)}
            >
              Создать
            </Button>,
            <Button
              icon={<FaOpencart />}
              onClick={() => setCartModal(!cartModal)}
            >
              Корзина
            </Button>
          )}
          <Button icon={<TiUser />} onClick={() => navigate("/profile")}>
            Профиль
          </Button>
        </div>
      </div>
      <ProductCreator open={createModal} setOpen={setCreateModal} />
      <Cart open={cartModal} setOpen={setCartModal} />
    </Style>
  );
}
