import React, { useState, useEffect } from "react";
import Header from "./Header";
import UsuariosForm from "./UsuariosForm";
import clienteAxios from "../config/axios";
import AllUsers from "./AllUsers";
const Usuarios = (props) => {
  console.log(props);
  const [users, setUsers] = useState([]);
  const jwt = window.sessionStorage.getItem("jwt");
  console.log(jwt);
  const axiosConfig = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  useEffect(() => {
    clienteAxios
      .get("/User", axiosConfig)
      .then((res) => {
        setUsers(res.data.usuarios);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(users);
  const userData = users.map((user) => (
    <AllUsers key={user._id} user={user} props={props} />
  ));
  return (
    <div>
      <Header></Header>

      <ul className="ul-Container">
        <li className="users-li">
          <h2>Usuarios</h2>
        </li>
        <li className="list first-row">
          <label>
            <input type="checkbox"></input>
          </label>
          <div className="name-email-cn user">
            <h2>Nombre</h2>
          </div>
          <div className="company-cn user">
            <h2>Apellido</h2>
          </div>
          <div className="position-cn user">
            <h2>Email</h2>
          </div>
          <div className="actions-cn">
            <h2>Acciones</h2>
          </div>
        </li>
        {userData}
      </ul>
      <UsuariosForm axiosConfig={axiosConfig}></UsuariosForm>
    </div>
  );
};

export default Usuarios;
