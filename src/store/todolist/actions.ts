import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SEARCH_TODO,
} from "./modules/actionTypes";

/* 액션 생성함수 선언 */
export const addTodo = (uuid: number, content: string) => ({
  type: ADD_TODO,
  item: {
    uuid,
    content,
  },
});
export const deleteToDo = (uuid: number, content: string) => ({
  type: DELETE_TODO,
  item: {
    uuid,
    content,
  },
});
export const editToDo = (uuid: number, content: string) => ({
  type: EDIT_TODO,
  toitemdo: {
    uuid,
    content,
  },
});
export const searchToDo = (uuid: number, content: string) => ({
  type: SEARCH_TODO,
  item: {
    uuid,
    content,
  },
});
export type ToDoListAction = ReturnType<typeof addTodo>;
