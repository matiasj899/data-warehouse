import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (adminValue) => {
  if (adminValue.adminValue === true) {
    return (
      <div className="full-container">
        <nav>
          <Link to="/">
            <h1 className="logo">LOGO</h1>
          </Link>
          <ul>
            <li>
              <NavLink to="/Contactos">
                Contactos
              </NavLink>
            </li>
            <li>
              <Link to="/Usuarios">Usuarios</Link>
            </li>
            <li>
              <Link to="/Company">Compañias</Link>
            </li>
            <li>
              <Link to="/Region-Ciudad">Region/Ciudad</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="full-container">
        <nav>
          <Link to="/">
            <h1 className="logo">LOGO</h1>
          </Link>
          <ul>
            <li>
              <Link to="/Contactos">Contactos</Link>
            </li>
            <li>
              <Link to="/Company">Compañias</Link>
            </li>
            <li>
              <Link to="/Region-Ciudad">Region/Ciudad</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Header;
