import React, { useState, useEffect } from "react";
import { ToDoListType } from "../typedef/hooks/usetodolist.types";

export default function useToDoList() {
  const [items, setItems] = useState<ToDoListType[]>([]);

  //저장된 문자열을 JSON으로 변환하여 list에 배열로 저장 함수 호출할 때 1번 만 실행됨
  useEffect(() => {
    setItems(JSON.parse(sessionStorage.getItem("@list") || "[]"));
  }, []);

  // list의 내용이 바뀔 때마다 바뀐 값을 문자열로 저장
  useEffect(() => {
    sessionStorage.setItem("@list", JSON.stringify(items));
  }, [items]);
  return { items, setItems };
}
