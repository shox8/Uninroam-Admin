import React from "react";
import { Block } from "../styles/auth";
import { Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { forgot, toggleLoader } from "../redux/reducers/auth";
import Anchor from "../components/anchor";

export default function Forgot() {
  const dispatch = useDispatch();
  const { forgotLoader } = useSelector((state) => state.auth);

  function submit(data) {
    localStorage.setItem("userEmail", data?.email);
    dispatch(toggleLoader("forgotLoader"));
    dispatch(forgot(data));
  }

  return (
    <Block>
      <Form name="forgot" layout="vertical" className="form" onFinish={submit}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Введите ваш Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Ваша электронная почта"
            className="input"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={forgotLoader}
            loading={forgotLoader}
          >
            Получить код
          </Button>
        </Form.Item>
        <Anchor text="Вспомнили пароль?" route="/login" routeName="Назад" />
      </Form>
    </Block>
  );
}
