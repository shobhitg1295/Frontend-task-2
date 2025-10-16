import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>☰</div>
    </nav>
  );
}

export default Navbar;
