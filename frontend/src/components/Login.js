import React, { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
const Login = (props) => {
  //generar state como objeto
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  //leer datos formulario
  const actualizarState = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //enviar peticion a la api
  const logUser = (e) => {
    e.preventDefault();
    clienteAxios.post("/User/login", state).then((res) => {
      console.log(res);
      props.history.push("/Contactos");
    })
    .catch(err=>console.log(err));
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
                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña..."
                  onChange={actualizarState}
                />
              </label>

              <input type="submit" value="INGRESAR" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
