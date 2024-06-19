import React, { useEffect, useState } from "react";
import { Block } from "./style";
import Navbar from "../../components/navbar";
import { Button, Input, Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/reducers/data";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Users() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.users);
  const [item, setItem] = useState({});
  const [value, setValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const columns = [
    {
      title: "Имя",
      render: (e) => (
        <div className="flex-space">
          {e.type}
          <Button className="dots" onClick={() => setItem(e)}>
            <HiDotsHorizontal />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Block>
      <Navbar />
      <div className="creator">
        <Input
          placeholder="Категория"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={add}>Добавить</Button>
      </div>
      <Table
        className="table"
        columns={columns}
        dataSource={categories}
        rowKey={(e) => e}
      />
      <Modal
        title="Изменить"
        open={isModalOpen}
        onOk={edit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input
          placeholder="Категория"
          value={item.type}
          onChange={(e) => setItem((p) => ({ ...p, type: e.target.value }))}
        />
      </Modal>
    </Block>
  );
}
