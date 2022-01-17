import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SEARCH_TODO,
} from "./modules/actionTypes";
import { ToDoListAction } from "./actions";
import { ToDoListType } from "../../typedef/hooks/usetodolist.types";

/* 초기 상태 선언 */
const initialState: ToDoListType[] = [];

/* 리듀서 선언 */
export default function todos(state = initialState, action: ToDoListAction) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.item);
    case DELETE_TODO:
      return;
    default:
      return state;
  }
}
