import React, { Component, useState, useContext } from "react";
import "../../scss/header.scss";
import NavHeader from "./NavHeader";
import Menu from "./Menu";

const Header_cont = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="header-container">
      <NavHeader setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} setMainColor={props.setMainColor} />
    </div>
  );
};

export default Header_cont;
