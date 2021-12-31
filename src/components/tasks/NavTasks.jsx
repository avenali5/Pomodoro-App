import React, { Component, useContext, useEffect } from "react";
import { TasksContext } from "./Tasks_cont";

const Nav = () => {
  const { tasks, status, setStatus, setFilteredTasks } =
    useContext(TasksContext);

  return (
    <section className="nav-container relative">
      <ul className="flex">
        <span className="title">Tasks</span>
        {/* <select onChange={filterTasks} name="taskStatus" id="taskStatus">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select> */}
        <svg
          className="absolute"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            stroke="#FF7777"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.46997 10.64L12 14.16L15.53 10.64"
            stroke="#FF7777"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ul>
      <hr />
    </section>
  );
};

export default Nav;
