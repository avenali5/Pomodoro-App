import React, { Component, createContext, useState, useEffect } from "react";
import Nav from "./NavTasks";
import Task from "./Task";
import AddTask from "./AddTask";
import "../../scss/tasks.scss";

export const TasksContext = createContext(null);

const Tasks_cont = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    let storagedTasks = localStorage.getItem("tasks");
    if (storagedTasks) {
      setTasks(JSON.parse(storagedTasks));
    } else {
      setTasks([
        {
          text: "",
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        filteredTasks,
        setFilteredTasks,
        status,
        setStatus,
      }}
    >
      <div className='tasks-container'>
        <Nav />
        <div className='tasks-list'>
          {filteredTasks && filteredTasks.length > 0 ? (
            filteredTasks.map((task) => <Task task={task} key={task.id} />)
          ) : (
            <h1 style={{ color: "white", marginTop: "1.5rem" }}>No tasks</h1>
          )}
          {/* {tasks ? tasks.map((task) => <Task task={task} key={task.id} />) : ""} */}
        </div>
        <AddTask />
      </div>
    </TasksContext.Provider>
  );
};

export default Tasks_cont;
