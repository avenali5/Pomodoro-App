import React, { Component, createContext, useState } from "react";
import NavPomodoro from "./NavPomodoro";
import Clock from "./Clock";
import Button from "./Button";
import "../../scss/pomodoro.scss";

export const PomodoroContext = createContext(null);

const Pomodoro_cont = (props) => {
  const [navSelected, setNavSelected] = useState("pomodoro");
  const [playing, setPlaying] = useState(false);

  return (
    <PomodoroContext.Provider
      value={{
        navSelected,
        setNavSelected,
        playing,
        setPlaying,
      }}
    >
      <div className="pomodoro-container flex">
        <NavPomodoro />
        <Clock mainColor={props.mainColor} />
        <Button />
      </div>
    </PomodoroContext.Provider>
  );
};

export default Pomodoro_cont;
