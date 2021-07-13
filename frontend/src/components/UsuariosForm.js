import React, { useState } from "react";
import clienteAxios from "../config/axios";
const UsuariosForm = ({ axiosConfig }) => {
  const [error, guardarError] = useState(false);
  const [loginError, guardarloginError] = useState(false);
  const [repeatPassword, setrepeatPassword] = useState("");
  const [passwordError, setpasswordError] = useState(false);

  const [newUser, setNewUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    admin: false,
  });

  function actualizarState(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }
  function actualizarAdmin(e) {
    console.log(e.target.value);
    if (e.target.value === "true") {
      newUser.admin = true;
    }
  }
  function secondPassword(e) {
    setrepeatPassword(e.target.value);
  }
  console.log(newUser);
  function handleClick(e) {
    e.preventDefault();
    if (
      newUser.nombre === "" ||
      newUser.apelido === "" ||
      newUser.email === "" ||
      newUser.password === ""
    ) {
      guardarError(true);
      guardarloginError(false);
      return;
    } else {
      guardarError(false);
    }
    if (newUser.password !== repeatPassword) {
      setpasswordError(true);
      return;
    } else {
      setpasswordError(false);
    }
    clienteAxios
      .post("/User/signup", newUser, axiosConfig)
      .then((res) => {
        if (res.status == 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="login-container user-section">
        <div className="login-box">
          <h2>Crear usuario</h2>
          <div className="forms-container user-section">
            <form>
              <label htmlFor="nombre">
                Nombre
                <input
                  type="text"
                  name="nombre"
                  className="inputInitialStyle"
                  onChange={actualizarState}
                />
              </label>
              <label htmlFor="apellido">
                Apellido
                <input
                  type="text"
                  name="apellido"
                  className="inputInitialStyle"
                  onChange={actualizarState}
                />
              </label>
              <label htmlFor="email">
                E-mail
                <input
                  type="email"
                  name="email"
                  className="inputInitialStyle"
                  onChange={actualizarState}
                />
              </label>

              <label htmlFor="password">
                Contraseña
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="inputInitialStyle"
                  onChange={actualizarState}
                />
              </label>
              <label htmlFor="repetir-password">
                Repetir contraseña
                <input
                  type="password"
                  name="repetir-password"
                  id="repetir-password"
                  className="inputInitialStyle"
                  onChange={secondPassword}
                />
                {passwordError ? (
                  <p className="error">Las contraseñas no coinciden.</p>
                ) : null}
              </label>
              <label htmlFor="admin">
                Administrador
                <select
                  type="boolean"
                  name="admin"
                  className="inputInitialStyle"
                  onChange={actualizarAdmin}
                >
                  <option value="false">No</option>
                  <option value="true">Si</option>
                </select>
                {error ? (
                  <p className="error">Todos los campos son obligatorios.</p>
                ) : null}
              </label>

              <input
                type="submit"
                value="CREAR"
                className="inputInitialStyle"
                onClick={handleClick}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsuariosForm;
