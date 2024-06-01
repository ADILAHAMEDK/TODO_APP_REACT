import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() => {
            setTodoList([
              ...todoList,
              { text: inputValue, status: false, id: Date.now() },
            ]);
            // Clear input field after adding a new item
            setInputValue("");
          }}
        ></i>
      </div>
      <div className="todos">
        {todoList.map((item) => {
          return (
            <div className="todo" key={item.id}>
              <div className="left">
                <input
                  value={item.status}
                  type="checkbox"
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(item);
                    setTodoList(
                      todoList.filter((filterItem) => {
                        if (filterItem.id === item.id) {
                          filterItem.status = e.target.checked;
                        }
                        return filterItem;
                      })
                    );
                  }}
                />
                {/* <p>{item.text}</p> */}
                <p className={item.status ? "line-through" : ""}>{item.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    setTodoList(
                      todoList.filter((deleleItem) => deleleItem.id !== item.id)
                    );
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
