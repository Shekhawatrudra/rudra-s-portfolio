import React from "react";
import logo from "../assets/rudra-logo.png";


const Header = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#1e272e",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(31, 2, 2, 0.3)",
      }}
    >
      {/* Logo + Name */}
      <div style={{ display: "flex", alignItems: "left" }}>
        <img
          src={logo}
          alt="Rudra Shekhawat Logo"
          style={{ height: "40px", marginRight: "0.75rem" }}
        />
        <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#00cec9" }}>
          Rudra Shekhawat
        </span>
      </div>

      {/* Navigation + Toggle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li><a href="#hero" style={navLinkStyle}>Home</a></li>
            <li><a href="#projects" style={navLinkStyle}>Projects</a></li>
            <li><a href="#skills" style={navLinkStyle}>Skills</a></li>
            <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const navLinkStyle = {
  color: "#dfe6e9",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s ease",
};

export default Header;
