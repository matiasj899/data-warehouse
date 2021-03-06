import React, { useState } from "react";

import clienteAxios from "../config/axios";

import useUser from "../hooks/useUser";

const Login = (props) => {
  const { userLog, isLogged } = useUser();

  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const [error, guardarError] = useState(false);
  const [loginError, guardarloginError] = useState(false);

  const actualizarState = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (state.email === "" || state.password === "") {
      guardarloginError(false);
    }
  };

  const logUser = (e) => {
    e.preventDefault();
    if (state.email === "" || state.password === "") {
      guardarError(true);
      guardarloginError(false);
      return;
    } else {
      guardarError(false);
    }
    clienteAxios
      .post("/User/login", state)
      .then((res) => {
        if (res.status === 200) {
          userLog(res.data.token, res.data.admin);

          props.history.push("/Contactos");
        }
      })
      .catch((err) => {
        if (err) {
          guardarloginError(true);
          return;
        } else {
          guardarloginError(false);
        }
      });
  };

  return (
    <div className="full-container">
      <nav>
        <h1 className="logo">LOGO</h1>
      </nav>
      <div className="login-container">
        <div className="login-box">
          <h2>Bienvenido</h2>
          <div className="forms-container">
            <form onSubmit={logUser}>
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email..."
                  onChange={actualizarState}
                  className="inputInitialStyle"
                />
              </label>

              <label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña..."
                  onChange={actualizarState}
                  className="inputInitialStyle"
                />
                {error ? (
                  <p className="error">Todos los campos son obligatorios.</p>
                ) : null}
                {loginError ? (
                  <p className="error">Usuario o contraseña incorrectos.</p>
                ) : null}
              </label>

              <input
                type="submit"
                value="INGRESAR"
                className="inputInitialStyle"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
