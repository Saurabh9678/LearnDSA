import React, { useState } from 'react';
import "./Header.css";
import {Link} from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">LearnDSA</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/content"}>Topic</Link>
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