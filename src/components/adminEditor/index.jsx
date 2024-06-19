import React, { useEffect } from "react";
import { Button, Drawer, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FormStyle } from "../../styles/content";
import { editAdmin, toggleLoader } from "../../redux/reducers/auth";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";

export default function AdminEditor({ open, setOpen }) {
  const dispatch = useDispatch();
  const { editLoader, admin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!editLoader) onClose();
  }, [editLoader]);

  function onFinish(data) {
    dispatch(toggleLoader("editLoader"));
    dispatch(editAdmin(data));
  }

  const onClose = () => setOpen(false);

  return (
    <Drawer title="Изменить данные" onClose={onClose} open={open}>
      <FormStyle>
        <Form onFinish={onFinish} layout="vertical" initialValues={admin}>
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
          <Form.Item>
            <Button
              htmlType="submit"
              loading={editLoader}
              className="text-black mt-5 btn"
            >
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </FormStyle>
    </Drawer>
  );
}
