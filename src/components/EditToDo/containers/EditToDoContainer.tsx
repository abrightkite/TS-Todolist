import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useToDoList from "../../../hooks/useToDoList";
import { ToDoListType } from "../../../typedef/hooks/usetodolist.types";
import EditToDo from "../EditToDo";

const EditToDoContainer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { items, setItems } = useToDoList();
  const [editInput, setEditInput] = useState("");

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditInput(e.target.value);
    console.log(editInput);
  };

  const saveClick = () => {
    const updateList = [...items];

    const idx = items.findIndex((item) => {
      return item.uuid === parseInt(params?.uuid ?? "-1");
    });

    const editedItems = [
      ...items.slice(0, idx),
      { uuid: parseInt(params?.uuid ?? "-1"), content: editInput },
      ...items.slice(idx + 1),
    ];
    setItems(editedItems);
    console.log(idx);
    navigate(-1);
  };

  const cancleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setEditInput(params?.content ?? "not Found");
  }, []);

  return (
    <EditToDo
      editInput={editInput}
      handleInput={handleInput}
      saveClick={saveClick}
      cancleClick={cancleClick}
    />
  );
};

export default EditToDoContainer;
