import React from "react";
import "./css/index.css";
import { ToDoListPropTypes } from "../../typedef/component/ToDoList/todolist.types";

const ToDoList = ({
  onEditButtonPressed,
  onDeletedButtonPressed,
  onToDoItemSearched,
  onTodoItemSubmitted,
  items,
  searchItem,
  addInputRef,
  searchInputRef,
}: ToDoListPropTypes) => {
  return (
    <div id="Home">
      <h1 className="header">To do List</h1>
      <div className="content">
        <form className="search" onSubmit={onToDoItemSearched}>
          <input
            className="search-input"
            type="text"
            placeholder="검색할 투두를 입력하세요"
            ref={searchInputRef}
          />
          <button>검색</button>
        </form>
        <div className="to-do-list">
          <ul className="list-box">
            {items &&
              (searchItem === null
                ? Object.values(items).map((item, index) => (
                    <li className="item" key={item.uuid}>
                      {item.content}
                      <button onClick={(e) => onEditButtonPressed(e, item)}>
                        M
                      </button>
                      <button onClick={(e) => onDeletedButtonPressed(e, index)}>
                        D
                      </button>
                    </li>
                  ))
                : Object.values(items)
                    .filter((item) => {
                      if (item.content.match(searchItem)) return item;
                    })
                    .map((item, index) => (
                      <li className="item" key={item.uuid}>
                        {item.content}
                        <button onClick={(e) => onEditButtonPressed(e, item)}>
                          M
                        </button>
                        <button
                          onClick={(e) => onDeletedButtonPressed(e, index)}
                        >
                          D
                        </button>
                      </li>
                    )))}
          </ul>
        </div>
        <form className="add" onSubmit={onTodoItemSubmitted}>
          <input
            className="add-input"
            type="text"
            placeholder="할 일을 입력하세요"
            ref={addInputRef}
          />
          <button>추가</button>
        </form>
      </div>
    </div>
  );
};

export default ToDoList;
