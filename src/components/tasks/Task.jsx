import React, { Component, useContext } from "react";
import { TasksContext } from "./Tasks_cont";

const Task = (props) => {
  let taskData = props.task;

  const { tasks, setTasks } = useContext(TasksContext);

  const completeTask = () => {
    setTasks(
      tasks.map((el) => {
        if (el.id === taskData.id) {
          return {
            //pasando el resto de las props que ya habia
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  const deleteTask = () => {
    setTasks(tasks.filter((el) => el.id !== taskData.id));
  };

  return (
    <section className="task-individual relative flex">
      <div className="rectangle absolute"></div>
      {/* <input type="text" placeholder="Type a task..." className="task-name" /> */}
      <span
        contentEditable
        suppressContentEditableWarning={true}
        spellCheck="false"
        autoCapitalize="sentences"
        className="task-name"
      >
        {taskData.text}
      </span>
      <div className="buttons">
        {!taskData.completed ? (
          <button className="complete-btn" onClick={completeTask}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22.4075H15C20 22.4075 22 20.4075 22 15.4075V9.40747C22 4.40747 20 2.40747 15 2.40747H9C4 2.40747 2 4.40747 2 9.40747V15.4075C2 20.4075 4 22.4075 9 22.4075Z"
                stroke="#2EEF7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 12.4075L10.58 15.2375L16.25 9.57747"
                stroke="#2EEF7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="completeHover absolute">Mark as complete</span>
          </button>
        ) : (
          <button className="complete-btn" onClick={completeTask}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                fill="#2EEF7B"
                stroke="#2EEF7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 12L10.58 14.83L16.25 9.17"
                stroke="#343434"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="completeHover absolute">Mark as incomplete</span>
          </button>
        )}
        <button className="delete-btn" onClick={deleteTask}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16998 15.2375L14.83 9.57747"
              stroke="#EF2E2E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.83 15.2375L9.16998 9.57747"
              stroke="#EF2E2E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 22.4075H15C20 22.4075 22 20.4075 22 15.4075V9.40747C22 4.40747 20 2.40747 15 2.40747H9C4 2.40747 2 4.40747 2 9.40747V15.4075C2 20.4075 4 22.4075 9 22.4075Z"
              stroke="#EF2E2E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="deleteHover absolute">Delete</span>
        </button>
      </div>
    </section>
  );
};

export default Task;
