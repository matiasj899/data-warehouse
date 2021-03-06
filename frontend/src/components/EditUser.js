import React, { useState } from "react";

import clienteAxios from "../config/axios";

const EditUser = ({ editModal, setEditModal, userId }) => {
  const [error, guardarError] = useState(false);
  const [loginError, guardarloginError] = useState(false);
  const [repeatPassword, setrepeatPassword] = useState("");
  const [passwordError, setpasswordError] = useState(false);
  const jwt = window.sessionStorage.getItem("jwt");
  const axiosConfig = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
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
    if (e.target.value === "true") {
      newUser.admin = true;
    }
  }
  function secondPassword(e) {
    setrepeatPassword(e.target.value);
  }

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
      .put(`/User/${userId}`, newUser, axiosConfig)
      .then((res) => {
        if (res.status == 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  function closeEditModal() {
    setEditModal(false);
  }
  return (
    <>
      <div className="modal-container edit-user">
        <div className="modal-content edit-user">
          <div className="login-container user-section">
            <div className="login-box edit-user">
              <div className="button-cn">
                <button onClick={closeEditModal}>
                  <div className="cross-img"></div>
                </button>
              </div>
              <div className="title-and-cross-cn">
                <h2>Editar usuario</h2>
              </div>

              <div className="forms-container user-section edit-user">
                <form>
                  <label htmlFor="nombre">
                    Nombre
                    <input
                      type="text"
                      name="nombre"
                      className="inputInitialStyle edit-user"
                      onChange={actualizarState}
                    />
                  </label>
                  <label htmlFor="apellido">
                    Apellido
                    <input
                      type="text"
                      name="apellido"
                      className="inputInitialStyle edit-user"
                      onChange={actualizarState}
                    />
                  </label>
                  <label htmlFor="email">
                    E-mail
                    <input
                      type="email"
                      name="email"
                      className="inputInitialStyle edit-user"
                      onChange={actualizarState}
                    />
                  </label>

                  <label htmlFor="password">
                    Contrase??a
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="inputInitialStyle edit-user"
                      onChange={actualizarState}
                    />
                  </label>
                  <label htmlFor="repetir-password">
                    Repetir contrase??a
                    <input
                      type="password"
                      name="repetir-password"
                      id="repetir-password"
                      className="inputInitialStyle edit-user"
                      onChange={secondPassword}
                    />
                    {passwordError ? (
                      <p className="error">Las contrase??as no coinciden.</p>
                    ) : null}
                  </label>
                  <label htmlFor="admin">
                    Administrador
                    <select
                      type="boolean"
                      name="admin"
                      className="inputInitialStyle edit-user"
                      onChange={actualizarAdmin}
                    >
                      <option value="false">No</option>
                      <option value="true">Si</option>
                    </select>
                    {error ? (
                      <p className="error">
                        Todos los campos son obligatorios.
                      </p>
                    ) : null}
                  </label>

                  <input
                    type="submit"
                    value="EDITAR"
                    className="inputInitialStyle edit-user"
                    onClick={handleClick}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
