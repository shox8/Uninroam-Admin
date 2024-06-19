import React, { useEffect } from "react";
import { Block } from "./style";
import Navbar from "../../components/navbar";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/reducers/users";

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
  ];

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
