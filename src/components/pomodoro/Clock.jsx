import React, { Component, useEffect, useState, useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { PomodoroContext } from "./Pomodoro_cont";
import alarm from "./assets/alarm.mp3";

const Clock = (props) => {
  const { navSelected, playing } = useContext(PomodoroContext);
  const [time, setTime] = useState(1500);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (navSelected === "pomodoro") {
      setTime(900);
      setKey(900);
    } else if (navSelected === "long") {
      setTime(600);
      setKey(600);
    } else if (navSelected === "short") {
      setTime(30);
      setKey(30);
    }
  });

  const timerProps = {
    isPlaying: playing,
    size: 200,
    strokeWidth: 6,
    colors: props.mainColor,
    duration: time,
    initialRemainingTime: time,
    remainingTime: key,
  };

  const timerComplete = () => {
    let audioTag = document.querySelector(".alarm");
    audioTag.play();
    audioTag.volume = 0.5;
    document.title = "Pomodoro App | Time is up!";
  };

  const audioEnded = () => {
    let audioTag = document.querySelector(".alarm");
    audioTag.pause();
  };

  return (
    <section className="clock-container relative">
      <CountdownCircleTimer
        key={key}
        {...timerProps}
        onComplete={timerComplete}
      >
        {({ remainingTime }) => (
          <span>
            {time < 600 ? (
              <span>
                {remainingTime} <br /> seconds
              </span>
            ) : (
              <span>
                {Math.floor(remainingTime / 60)} <br /> minutes
              </span>
            )}

            <audio onEnded={audioEnded} className="alarm">
              <source src={alarm} type="audio/mp3" />
              {(document.title = `Pomodoro App | ${remainingTime} `)}
            </audio>
            <br />
          </span>
        )}
      </CountdownCircleTimer>
    </section>
  );
};

export default Clock;
