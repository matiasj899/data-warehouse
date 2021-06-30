import React, { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import AllUsers from "./AllUsers";
const UsuariosList = () => {
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
  const userData = users.map((user) => {
    <AllUsers key={user._id} user={user}></AllUsers>;
  });

  return null;
};
export default UsuariosList;
