import React from "react";
import { Block } from "../styles/auth";
import { Button, Form, Input } from "antd";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { login, toggleLoader } from "../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import Anchor from "../components/anchor";

export default function Login() {
  const dispatch = useDispatch();
  const { loginLoader } = useSelector((state) => state.auth);

  function submit(data) {
    dispatch(toggleLoader("loginLoader"));
    dispatch(login(data));
  }

  return (
    <Block>
      <Form name="login" layout="vertical" className="form" onFinish={submit}>
        <div className="title">Вход</div>
        <Form.Item
          name="email"
          label="Электронный адрес"
          rules={[{ required: true, message: "Введите ваш Email!" }]}
        >
          <Input
            prefix={<IoMailOpenOutline />}
            type="email"
            placeholder="Электронный адрес"
            className="input"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[{ required: true, message: "Введите пароль!" }]}
        >
          <Input.Password
            prefix={<IoMdLock />}
            type="password"
            placeholder="Пароль"
            className="input"
          />
        </Form.Item>
        <Anchor text="Забыли пароль?" route="/forgot" routeName="Сменить" />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loginLoader}
            loading={loginLoader}
          >
            Вход
          </Button>
        </Form.Item>
      </Form>
    </Block>
  );
}
