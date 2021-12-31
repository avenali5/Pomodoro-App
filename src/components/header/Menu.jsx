import React, { Component, useState } from "react";

const Menu = (props) => {
  const [fontSelected, setFontSelected] = useState("chivo");
  const [colorSelected, setColorSelected] = useState("red");

  const changeColor = (color, theme) => {
    props.setMainColor(color);
    document.body.className = "";
    document.body.classList.add(theme);
  };

  const changeFont = (font) => {
    document.body.id = "";
    document.body.id = font;
  };

  return (
    <section className={`whole-menu-container ${props.menu ? "openMenu" : ""}`}>
      <section
        className={`menu-container relative ${
          props.menu ? "openMenuModal" : ""
        }`}
      >
        <div className="top flex">
          <span className="title">Settings</span>
          <div
            className="close"
            onClick={() => {
              props.setMenu(false);
            }}
          >
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
          </div>
        </div>
        <div className="options">
          <div className="option color">
            <span className="title">Accent color</span>
            <hr />
            <ul className="flex">
              <div
                className={`${
                  colorSelected === "red" ? "colorSelected" : ""
                } red`}
                onClick={() => {
                  changeColor("#ff7777", "red");
                  setColorSelected("red");
                }}
              ></div>
              <div
                className={`${
                  colorSelected === "blue" ? "colorSelected" : ""
                } blue`}
                onClick={() => {
                  changeColor("#68C8DD", "blue");
                  setColorSelected("blue");
                }}
              ></div>
              <div
                className={`${
                  colorSelected === "green" ? "colorSelected" : ""
                } green`}
                onClick={() => {
                  changeColor("#7ABB84", "green");
                  setColorSelected("green");
                }}
              ></div>
            </ul>
          </div>
          <div className="option font">
            <span className="title">Font</span>
            <hr />
            <ul>
              <li
                className={`${
                  fontSelected === "chivo" ? "fontSelected" : ""
                } chivo`}
                onClick={() => {
                  changeFont("chivo");
                  setFontSelected("chivo");
                }}
              >
                Chivo
              </li>
              <li
                className={`${
                  fontSelected === "bai" ? "fontSelected" : ""
                } bai`}
                onClick={() => {
                  changeFont("bai");
                  setFontSelected("bai");
                }}
              >
                Bai Jamjuree
              </li>
              <li
                className={`${
                  fontSelected === "cormorant" ? "fontSelected" : ""
                } cormorant`}
                onClick={() => {
                  changeFont("cormorant");
                  setFontSelected("cormorant");
                }}
              >
                Cormorant
              </li>
              <li
                className={`${
                  fontSelected === "gaegu" ? "fontSelected" : ""
                } gaegu`}
                onClick={() => {
                  changeFont("gaegu");
                  setFontSelected("gaegu");
                }}
              >
                Gaegu
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Menu;
