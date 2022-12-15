import React, { useState } from 'react';
import "./Header.css";
import {Link} from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      
      <span className="nav-logo">
            <font color="#ffffff">L</font>
            <font color="#ffffff">e</font>
            <font color="#ffffff">a</font>
            <font color="#ffffff">r</font>
            <font color="#ffffff">n</font>
            <font color="#D74345">D</font>
            <font color="#D74345">S</font>
            <font color="#D74345">A</font></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/contents"}>Topic</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header