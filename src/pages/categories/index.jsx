import React, { useEffect } from "react";
import { Block } from "./style";
import Navbar from "../../components/navbar";
import { Button, Dropdown, Popconfirm, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/reducers/data";
import { FaPencilAlt } from "react-icons/fa";
import { BiSolidTrash } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const items = [
    {
      label: (
        <div onClick={() => null} className="flex">
          <FaPencilAlt />
          Изменить
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <Popconfirm title="Вы хотите удалить?" onConfirm={() => null}>
          <div className="flex">
            <BiSolidTrash />
            Удалить
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
            <Button className="dots">
              <HiDotsHorizontal />
            </Button>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <Block>
      <Navbar />
      <Table
        className="table"
        columns={columns}
        dataSource={categories}
        rowKey={(e) => e}
      />
    </Block>
  );
}
