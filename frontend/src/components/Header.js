import React, { useState } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import useUser from "../hooks/useUser";
const Header = () => {
  const isAdmin = window.sessionStorage.getItem("admin");
  console.log(isAdmin);
  const { isLogged, logOut } = useUser();

  function cerrarSesion() {
    logOut();
    console.log("cerrando sesion");
  }

  if (!isLogged) {
    return <Redirect to="/"></Redirect>;
  } else if (isAdmin === "true" && isLogged) {
    return (
      <div className="full-container">
        <nav>
          <h1 className="logo">LOGO</h1>

          <ul>
            <li>
              <NavLink to="/Contactos">Contactos</NavLink>
            </li>
            <li>
              <Link to="/Usuarios">Usuarios</Link>
            </li>
            <li>
              <Link to="/Compañias">Compañias</Link>
            </li>
            <li>
              <Link to="/Region-Ciudad">Region/Ciudad</Link>
            </li>
            <li>
              <button className="logOut-btn" onClick={cerrarSesion}>
                <Link to="/">Salir</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="full-container">
        <nav>
          <h1 className="logo">LOGO</h1>

          <ul>
            <li>
              <Link to="/Contactos">Contactos</Link>
            </li>
            <li>
              <Link to="/Compañias">Compañias</Link>
            </li>
            <li>
              <Link to="/Region-Ciudad">Region/Ciudad</Link>
            </li>
            <li>
              <button className="logOut-btn" onClick={cerrarSesion}>
                <Link to="/">Salir</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Header;
