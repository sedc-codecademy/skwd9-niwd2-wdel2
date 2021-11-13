import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">My App!</div>
      <nav className="nav">
        <NavLink
          to="/home"
          className={(navData) =>
            navData.isActive ? "active nav-item" : "nav-item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(navData) =>
            navData.isActive ? "active nav-item" : "nav-item"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={(navData) =>
            navData.isActive ? "active nav-item" : "nav-item"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/todos"
          className={(navData) =>
            navData.isActive ? "active nav-item" : "nav-item"
          }
        >
          Todos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
