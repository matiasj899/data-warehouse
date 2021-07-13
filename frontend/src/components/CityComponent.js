import React, { useState } from "react";
import clienteAxios from "../config/axios";

const CityComponent = ({ city, jwt }) => {
  console.log(city);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [error, guardarError] = useState(false);
  const [pais,setPais]=useState({ nombre: "" })
  function deleteCountry() {
    setDeleteModal(true);
  }
  function closeModal() {
    setDeleteModal(false);
  }
  function editCity() {
    setEditModal(true);
  }
  function handleModal() {
    setEditModal(false);
  }
  function editName(e){
    console.log(e.target.value);
    setPais({ ...pais, [e.target.name]: e.target.value });
  }
  function editRequest(e) {
   
    e.preventDefault();
    console.log(city._id);
    const cityId = city._id;
    if (pais.nombre === "") {
      guardarError(true);
      return;
    } else {
      guardarError(false);
    }
    clienteAxios
      .put(`/Ciudad/${cityId}`,pais)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  function deleteCity() {
   const cityId=city._id
    clienteAxios
      .delete(`/Ciudad/${cityId}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="city-cn">
      <h3>{city.nombre}</h3>
      <button
        className="inputInitialStyle add-btn second-cn edit"
        onClick={editCity}
      >
        Editar
      </button>
      <button
        className="inputInitialStyle add-btn second-cn"
        onClick={deleteCountry}
      >
        Eliminar
      </button>
      {deleteModal === true ? (
        <div className="modal-container">
          <div className="modal-content delete">
            <div className="delete-icon-cn">
              <div className="delete-icon"></div>
            </div>

            <h2>¿Seguro que deseas eliminar el pais seleccionado?</h2>
            <div className="btn-cn">
              <button className="cancel-btn" onClick={closeModal}>
                Cancelar
              </button>
              <button className="delete-btn" onClick={deleteCity}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {editModal === true ? (
        <div className="modal-container">
          <div className="modal-content region">
            <div className="modal-contact-and-btn">
              <h1>Editar ciudad</h1>
              <button onClick={handleModal}>
                <div className="cross-img"></div>
              </button>
            </div>
            <form>
              <label htmlFor="City">
                {" "}
                Nombre
                <input type="text" name="nombre" onChange={editName}></input>
                {error ? <p className="error">Campos obligatorios.</p> : null}
              </label>
              <input
                type="submit"
                value="EDITAR"
                className="inputInitialStyle"
                onClick={editRequest}
              />
            </form>
          </div>
        </div>
      ) : null}
      
    </div>
  );
};

export default CityComponent;
