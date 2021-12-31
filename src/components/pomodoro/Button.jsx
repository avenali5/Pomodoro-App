import React, { Component, useContext } from "react";
import { PomodoroContext } from "./Pomodoro_cont";
import buttonClick from "./assets/buttonClick.wav";

const Button = () => {
  const { playing, setPlaying } = useContext(PomodoroContext);

  const handleClick = () => {
    let audioTag = document.querySelector(".alarm");
    let buttonClick = document.querySelector(".buttonClick");

    audioTag.pause();
    buttonClick.play();
    document.title = "Pomodoro App";
  };

  return (
    <section className="button-container relative">
      <a
        className="main button"
        onClick={() => {
          setPlaying(!playing);
          handleClick();
        }}
      >
        {playing == true ? "Stop" : "Start"}
        <audio className="buttonClick" src={buttonClick}></audio>
      </a>
    </section>
  );
};

export default Button;
