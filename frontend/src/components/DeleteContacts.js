import React from "react";
import clienteAxios from "../config/axios";
import Contactos from "./Contactos";
const DeleteContacts = (props) => {
  const contactosId = props.match.params.id;
  
  const jwt = window.sessionStorage.getItem("jwt");
  const axiosConfig = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };

  function handleClick(e) {
    clienteAxios
      .delete(`/Contactos/${contactosId}`, axiosConfig)
      .then((res) => {
        if (res.status === 200) {
          props.history.push(`/Contactos/`);
        }
      })
      .catch((error) => console.log(error));
  }
  function closeModal(e) {
    props.history.push(`/Contactos/`);
  }
  return (
    <>
      <Contactos></Contactos>
      <div className="modal-container">
        <div className="modal-content delete">
          <div className="delete-icon-cn">
            <div className="delete-icon"></div>
          </div>

          <h2>¿Seguro que deseas eliminar los usuarios seleccionados?</h2>
          <div className="btn-cn">
            <button className="cancel-btn" onClick={closeModal}>
              Cancelar
            </button>
            <button className="delete-btn" onClick={handleClick}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteContacts;
