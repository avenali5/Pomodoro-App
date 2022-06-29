import React, { Component, useContext, useEffect } from "react";
import Task from "./Task";
import { TasksContext } from "./Tasks_cont";

const Nav = () => {
  const { tasks, status, setStatus, filteredTasks, setFilteredTasks } =
    useContext(TasksContext);

  useEffect(() => {
    filterHandler(status);
  }, [tasks, status]);

  const filterHandler = (status) => {
    switch (status) {
      case "complete":
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case "incomplete":
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;

      default:
        setFilteredTasks(tasks);
        break;
    }
  };
  return (
    <section className='nav-container relative'>
      <ul className='flex'>
        <span className='title'>Tasks</span>
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          name='taskStatus'
          id='taskStatus'
        >
          <option value='all'>All</option>
          <option value='complete'>Complete</option>
          <option value='incomplete'>Incomplete</option>
        </select>
        <svg
          className='absolute'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
            stroke='#FF7777'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.46997 10.64L12 14.16L15.53 10.64'
            stroke='#FF7777'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </ul>
      <hr />
    </section>
  );
};

export default Nav;
