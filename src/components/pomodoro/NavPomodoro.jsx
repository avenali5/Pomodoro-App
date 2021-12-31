import React, { Component, useContext } from "react";
import { PomodoroContext } from "./Pomodoro_cont";

const NavPomodoro = () => {
  const { navSelected, setNavSelected } = useContext(PomodoroContext);

  return (
    <section className="nav-container relative">
      <ul className="flex">
        <li
          className={`${navSelected === "pomodoro" ? "selectedNav" : ""}`}
          onClick={() => {
            setNavSelected("pomodoro");
          }}
        >
          Pomodoro
        </li>
        <li
          className={`${navSelected === "short" ? "selectedNav" : ""}`}
          onClick={() => {
            setNavSelected("short");
          }}
        >
          Short break
        </li>
        <li
          className={`${navSelected === "long" ? "selectedNav" : ""}`}
          onClick={() => {
            setNavSelected("long");
          }}
        >
          Long break
        </li>
      </ul>
      <hr />
    </section>
  );
};

export default NavPomodoro;
