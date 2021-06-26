import React from "react";
import clienteAxios from "../config/axios";
import Header from "./Header";
import Usuarios from "./Usuarios";
import DeleteIcon from "./DeleteIcon";


const DeleteModal = (props) => {
    const userId=props.match.params.id
  const jwt = window.sessionStorage.getItem("jwt");
  const axiosConfig = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };

  function handleClick(e) {
    clienteAxios
      .delete(`/User/${userId}`, axiosConfig)
      .then((res) => {
        if(res.status===200){
            props.history.push(`/Usuarios/`)
        }
      })
      .catch((error) => console.log(error));
  }
  return (
      <>
<Usuarios></Usuarios>
    <div className="modal-container">
      <div className="modal-content delete">
          <DeleteIcon></DeleteIcon>
        <h2>Seguro desear eliminar a este usuario?</h2>
        <button>Cancelar</button>
        <button onClick={handleClick}>Eliminar</button>
      </div>
    </div>
    </>
  );
};

export default DeleteModal;
