import React, { Component, createContext, useState, useEffect } from "react";
import Nav from "./NavTasks";
import Task from "./Task";
import AddTask from "./AddTask";
import "../../scss/tasks.scss";

export const TasksContext = createContext(null);

const Tasks_cont = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Type a task...",
      completed: false,
      id: Math.random() * 1000,
    },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="tasks-container">
        <Nav />
        <div className="tasks-list">
          {tasks ? tasks.map((task) => <Task task={task} key={task.id} />) : ""}
        </div>
        <AddTask />
      </div>
    </TasksContext.Provider>
  );
};

export default Tasks_cont;
