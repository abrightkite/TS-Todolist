import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToDoList from "../../../hooks/useToDoList";
import { ToDoListType } from "../../../typedef/hooks/usetodolist.types";
import ToDoList from "../ToDoList";

const ToDoListContainer = () => {
  const { items, setItems } = useToDoList();
  const navigate = useNavigate();
  const addInputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchItem, setSearchItem] = useState<string | null>(null);

  //수정
  const onEditButtonPressed = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: ToDoListType
  ) => {
    e.preventDefault();
    navigate(`/edit/${item.uuid}/${item.content}`);
  };

  //삭제
  const onDeletedButtonPressed = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();

    const clone = [...items];
    clone.splice(index, 1);
    setItems(clone);
  };

  // 추가
  const onTodoItemSubmitted: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!addInputRef?.current) {
      return;
    }
    const item = {
      uuid: Date.now(),
      content: addInputRef.current.value,
    };
    setItems([item, ...items]);

    addInputRef.current.value = "";
  };

  // 검색
  const onToDoItemSearched: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!searchInputRef?.current) {
      return;
    }
    const content = searchInputRef.current.value;
    setSearchItem(content);
    searchInputRef.current.value = "";
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <ToDoList
      onEditButtonPressed={onEditButtonPressed}
      onDeletedButtonPressed={onDeletedButtonPressed}
      onToDoItemSearched={onToDoItemSearched}
      onTodoItemSubmitted={onTodoItemSubmitted}
      items={items}
      searchItem={searchItem}
      addInputRef={addInputRef}
      searchInputRef={searchInputRef}
    />
  );
};

export default ToDoListContainer;
