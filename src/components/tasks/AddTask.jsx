import React, { Component, useContext } from "react";
import { TasksContext } from "./Tasks_cont";

const AddTask = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        text: "Type a task...",
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
  };

  return (
    <section className="add-task-container relative">
      <a className="add-task flex" onClick={addTask}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12.2469H16"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 16.2469V8.24689"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 22.2469H15C20 22.2469 22 20.2469 22 15.2469V9.24689C22 4.24689 20 2.24689 15 2.24689H9C4 2.24689 2 4.24689 2 9.24689V15.2469C2 20.2469 4 22.2469 9 22.2469Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Add Task
      </a>
    </section>
  );
};

export default AddTask;
