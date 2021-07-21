import React, { useState, useEffect } from "react";
import Header from "./Header";
import UsuariosForm from "./UsuariosForm";
import clienteAxios from "../config/axios";
import AllUsers from "./AllUsers";
const Usuarios = (props) => {
  let array = [];

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState([]);
  const [deleteArray, setdeleteArray] = useState([]);
  const [selected, setSelected] = useState(false);
  const jwt = window.sessionStorage.getItem("jwt");
  const [allCheckbox, setAllCheckbox] = useState(false);

  const axiosConfig = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  useEffect(() => {
    clienteAxios
      .get("/User", axiosConfig)
      .then((res) => {
        const data = res.data.usuarios.filter(
          (usuario) => usuario.admin != true
        );
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleClick(e) {
    setAllCheckbox(!allCheckbox);
    const numberOfUsers = users.map((number) => {
      array.push(number._id);
      setdeleteArray(array);
    });
    setCount(array.length);
    setSelected(!selected);
    if (allCheckbox === true) {
      setCount(null);
    }
  }
  function deleteUser(e) {
    const jsonArray = JSON.stringify(deleteArray);
    props.history.push(`/Usuarios/${jsonArray}`);
  }

  const userData = users.map((user) => (
    <AllUsers
      key={user._id}
      user={user}
      props={props}
      allCheckbox={allCheckbox}
      selected={selected}
      setSelected={setSelected}
      deleteArray={deleteArray}
      setdeleteArray={setdeleteArray}
      setCount={setCount}
    />
  ));

  return (
    <div>
      <Header></Header>
      {selected ? (
        <div className="select-and-delete">
          <div className="selected-items-cn">
            <p className="selected-items-p">{count} seleccionados</p>
          </div>
          <button className="selected-items-p" onClick={deleteUser}>
            Eliminar contactos
          </button>
        </div>
      ) : null}

      <ul className="ul-Container">
        <li className="users-li">
          <h2>Usuarios</h2>
        </li>
        <li className="list first-row">
          <label>
            <input
              type="checkbox"
              onChange={handleClick}
              checked={allCheckbox}
            ></input>
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
