import React, { Component } from "react";
import logo from "./header_assets/logo.png";

const NavHeader = (props) => {
  return (
    <header className="whole-header-container">
      <section className="header-container flex max-width relative">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div
          className="settings"
          onClick={() => {
            props.setMenu(true);
          }}
        >
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.875 27.5H18.125C24.1667 27.5 26.5834 25 26.5834 18.75V11.25C26.5834 5 24.1667 2.5 18.125 2.5H10.875C4.83335 2.5 2.41669 5 2.41669 11.25V18.75C2.41669 25 4.83335 27.5 10.875 27.5Z"
              stroke="#FF7777"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.8137 23.125V18.25"
              stroke="#FF7777"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.8137 9.3125V6.875"
              stroke="#FF7777"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.8137 15.8125C20.5488 15.8125 21.9554 14.3574 21.9554 12.5625C21.9554 10.7676 20.5488 9.3125 18.8137 9.3125C17.0786 9.3125 15.6721 10.7676 15.6721 12.5625C15.6721 14.3574 17.0786 15.8125 18.8137 15.8125Z"
              stroke="#FF7777"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1863 23.125V20.6875"
              stroke="#FF7777"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1863 11.75V6.875"
              stroke="#FF7777"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1863 20.6875C11.9214 20.6875 13.328 19.2324 13.328 17.4375C13.328 15.6426 11.9214 14.1875 10.1863 14.1875C8.45119 14.1875 7.04462 15.6426 7.04462 17.4375C7.04462 19.2324 8.45119 20.6875 10.1863 20.6875Z"
              stroke="#FF7777"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
    </header>
  );
};

export default NavHeader;
