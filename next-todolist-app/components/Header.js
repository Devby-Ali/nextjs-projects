"use client";
import React, { useState } from "react";

function Header({ firstname, lastname }) {
  const [title, setTitle] = useState("");
  const [isShowInput, setIsShowInput] = useState(false);

  const addTodo = async (event) => {
    const todo = {
      title,
      isCompleted: false,
    };

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    console.log("Res ->", res);

    if (res.status === 201) {
      setTitle("");
    }
  };
  const signOut = () => {};

  return (
    <>
      <div
        className="form-container"
        style={{ display: `${isShowInput ? "block" : "none"}` }}
      >
        <div className="add-form">
          <input
            id="input"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Type your To-Do works..."
          />
          <button type="submit" id="submit" onClick={addTodo}>
            ADD
          </button>
        </div>
      </div>
      <div className="head">
        <div className="date">
          <p>
            {firstname} {lastname}
          </p>
        </div>
        <div className="add" onClick={(event) => setIsShowInput(true)}>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </div>
        <div className="time" onClick={signOut}>
          <a href="#">Logout</a>
        </div>
      </div>
    </>
  );
}

export default Header;
