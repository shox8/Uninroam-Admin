import React from "react";
import { Block } from "../styles/auth";
import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { reset, toggleLoader } from "../redux/reducers/auth";
import Anchor from "../components/anchor";

export default function Reset() {
  const dispatch = useDispatch();
  const { resetLoader } = useSelector((state) => state.auth);

  function submit(data) {
    dispatch(toggleLoader("resetLoader"));
    dispatch(reset({ ...data, email: localStorage.getItem("userEmail") }));
  }

  return (
    <Block>
      <Form name="reset" layout="vertical" className="form" onFinish={submit}>
        <Form.Item
          name="otp"
          label="OTP Код"
          rules={[
            {
              required: true,
              message: "Введите OTP код!",
            },
          ]}
        >
          <Input.OTP length={6} className="otp" />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="Новый пароль"
          rules={[
            {
              required: true,
              message: "Придумайте новый пароль!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Пароль"
            className="input"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={resetLoader}
            loading={resetLoader}
          >
            Сменить
          </Button>
        </Form.Item>
        <Anchor text="Вспомнили пароль?" route="/login" routeName="Назад" />
      </Form>
    </Block>
  );
}
