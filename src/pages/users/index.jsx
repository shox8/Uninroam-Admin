import React, { useEffect } from "react";
import { Block } from "./style";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUsers, toggleLoader } from "../../redux/reducers/users";
import Navbar from "../../components/navbar";

export default function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const columns = [
    {
      title: "Имя",
      dataIndex: "username",
    },
    {
      title: "Роль",
      render: (e) => (e.type === "buyer" ? "Покупатель" : "Продавец"),
    },
    {
      title: "Бан",
      render: (e) => (
        <Button onClick={() => ban(e)}>
          {e.ban ? "Отменить" : "Блокировать"}
        </Button>
      ),
    },
  ];

  // function openModal() {}

  function ban(user) {
    // dispatch(toggleLoader("banLoader"));
    dispatch(editUser({ ...user, ban: !user.ban }));
  }

  return (
    <Block>
      <Navbar />
      <Table
        className="table"
        columns={columns}
        dataSource={users}
        rowKey={(e) => e}
      />
    </Block>
  );
}
