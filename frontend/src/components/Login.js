import React, { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Contactos from "./Contactos";
const Login = (props) => {
  //generar state como objeto
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const [className, setClassName] = useState("inputInitialStyle");

  const[text,setText]=useState(false)
  //leer datos formulario
  const actualizarState = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarClase = () => {
    if (state === "") {
      console.log("volviendo al estilo anterior");
      setClassName("inputInitialStyle");
    } else {
      console.log("cambiando estilo");
      setClassName("inputInitialStyle loginError");
    }
  };

  //enviar peticion a la api
  const logUser = (e) => {
    e.preventDefault();
    clienteAxios
      .post("/User/login", state)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res);
          props.history.push("/Contactos", { admin: res.data.admin });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          actualizarClase();
        }
      });
  };

  return (
    <div className="full-container">
      <nav>
        <Link to="/">
          <h1 className="logo">LOGO</h1>
        </Link>
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
                  className={className}
                />
              </label>
              
              <label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña..."
                  onChange={actualizarState}
                  className={className}
                />
                <p>Email o Contraseña incorrectos.</p>
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
