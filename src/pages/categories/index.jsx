import React, { useEffect, useState } from "react";
import { Block } from "./style";
import Navbar from "../../components/navbar";
import {
  Button,
  Dropdown,
  Input,
  Modal,
  Popconfirm,
  Table,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  getCategories,
  removeCategory,
  updateCategory,
} from "../../redux/reducers/data";
import { FaPencilAlt } from "react-icons/fa";
import { BiSolidTrash } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.data);
  const [item, setItem] = useState({});
  const [value, setValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const items = [
    {
      label: (
        <div onClick={() => setIsModalOpen(true)} className="flex">
          <FaPencilAlt /> Изменить
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <Popconfirm
          title="Вы хотите удалить?"
          onConfirm={() => dispatch(removeCategory(item.id))}
        >
          <div className="flex">
            <BiSolidTrash /> Удалить
          </div>
        </Popconfirm>
      ),
      key: "1",
    },
  ];

  const columns = [
    {
      title: "Категория",
      render: (e) => (
        <div className="flex-space">
          {e.type}
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button className="dots" onClick={() => setItem(e)}>
              <HiDotsHorizontal />
            </Button>
          </Dropdown>
        </div>
      ),
    },
  ];

  function add() {
    if (value !== "") {
      dispatch(addCategory({ type: value }));
      setValue("");
    } else {
      message.warning("Введите категорию");
    }
  }

  function edit() {
    if (item.type !== "") {
      dispatch(updateCategory(item));
      setItem({});
      setIsModalOpen(false);
    }
  }

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
