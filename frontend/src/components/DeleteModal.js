import React from "react";
import clienteAxios from "../config/axios";
import Header from "./Header";
import Usuarios from "./Usuarios";



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
  function closeModal(e){
    props.history.push(`/Usuarios/`)
  }
  return (
      <>
<Usuarios></Usuarios>
    <div className="modal-container">
      <div className="modal-content delete">
          <div className="delete-icon-cn">
          <div className='delete-icon'></div>
          </div>
          
        <h2>¿Seguro que deseas eliminar los usuarios seleccionados?</h2>
        <div className="btn-cn">
        <button className="cancel-btn" onClick={closeModal}>Cancelar</button>
        <button className="delete-btn" onClick={handleClick}>Eliminar</button>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default DeleteModal;
