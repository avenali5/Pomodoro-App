import React, { Component, useState } from "react";
import Header_cont from "./header/Header_cont";
import Pomodoro_cont from "./pomodoro/Pomodoro_cont";
import Tasks_cont from "./tasks/Tasks_cont";

const Main = () => {
  const [mainColor, setMainColor] = useState("#ff7777");

  return (
    <main className="main">
      <Header_cont setMainColor={setMainColor} />
      <section className="flex main-container relative max-width">
        <Pomodoro_cont mainColor={mainColor} />
        <Tasks_cont />
      </section>
    </main>
  );
};

export default Main;
