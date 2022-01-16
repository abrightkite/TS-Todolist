import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoListContainer from "../components/ToDoList/containers/ToDoListContainer";
import EditToDoContainer from "../components/EditToDo/containers/EditToDoContainer";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoListContainer />} />
        <Route path="/edit/:uuid/:content" element={<EditToDoContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
