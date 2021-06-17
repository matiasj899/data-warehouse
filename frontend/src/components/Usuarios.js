import React from "react";
import Header from "./Header";

const Usuarios = () => {
  return (
    <div>
      <Header></Header>
      <div className="login-container">
        <div className="login-box">
          <h2>Crear usuario</h2>
          <div className="forms-container">
            <form>
              <label htmlFor="name">
                Nombre
                <input type="text" name="name" className="inputInitialStyle" />
              </label>
              <label htmlFor="apellido">
                Apellido
                <input
                  type="text"
                  name="apellido"
                  className="inputInitialStyle"
                />
              </label>
              <label htmlFor="email">
                E-mail
                <input
                  type="email"
                  name="email"
                  className="inputInitialStyle"
                />
              </label>

              <label htmlFor="password">
                Contraseña
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="inputInitialStyle"
                />
              </label>
              <label htmlFor="repetir-password">
                Repetir contraseña
                <input
                  type="password"
                  name="repetir-password"
                  id="repetir-password"
                  className="inputInitialStyle"
                />
              </label>

              <input
                type="submit"
                value="CREAR"
                className="inputInitialStyle"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
