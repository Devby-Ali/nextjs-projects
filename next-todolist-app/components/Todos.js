"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todos() {
  const [allTodos, setAllTodos] = useState([]);

  const removeTodo = () => {};

  return (
    <div id="todo">
      <ul id="tasksContainer">
        {allTodos.map((todo) => (
          <li key={todo?._id}>
            <span className="mark">
              <input type="checkbox" className="checkbox" />
            </span>
            <div className="list">
              <p>{todo?.title}</p>
            </div>
            <span className="delete" onClick={() => removeTodo(todo._id)}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
