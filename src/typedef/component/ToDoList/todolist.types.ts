import React from "react";
import { ToDoListType } from "../../../typedef/hooks/usetodolist.types";

export type ToDoListPropTypes = {
  onEditButtonPressed: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: ToDoListType
  ) => void;
  onDeletedButtonPressed: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
  onToDoItemSearched: React.FormEventHandler<HTMLFormElement>;
  onTodoItemSubmitted: React.FormEventHandler<HTMLFormElement>;
  items: ToDoListType[];
  searchItem: string | null;
  addInputRef: React.RefObject<HTMLInputElement>;
  searchInputRef: React.RefObject<HTMLInputElement>;
};
