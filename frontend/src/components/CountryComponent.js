import React, { useState, useEffect } from "react";
import NewCity from "./NewCity";
import clienteAxios from "../config/axios";
import CityComponent from "./CityComponent";
const CountryComponent = ({ country, jwt }) => {
  console.log(country.ciudades);
  const cities = country.ciudades;

  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [error, guardarError] = useState(false);
  const [pais, setPais] = useState({ nombre: "" });
  function showModal() {
    setModal(true);
  }
  function addCity() {
    console.log(country._id);
    showModal();
  }
  function editCountry() {
    setEditModal(true);
  }
  function handleModal() {
    setEditModal(false);
  }
  function editName(e) {
    console.log(e.target.value);
    setPais({ ...pais, [e.target.name]: e.target.value });
  }
  function deleteCountry() {
    setDeleteModal(true);
  }
  function closeModal() {
    setDeleteModal(false);
  }
  function deleteRequest() {
    
    const countryId=country._id
    clienteAxios
      .delete(`/Pais/${countryId}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  function editRequest(e) {
    e.preventDefault();
    const countryId = country._id;
    console.log(pais.nombre);
    if (pais.nombre === "") {
      guardarError(true);
      return;
    } else {
      guardarError(false);
    }
    clienteAxios
      .put(`/Pais/${countryId}`, pais)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  const cityMap = cities.map((city) => {
    return <CityComponent key={city._id} city={city} jwt={jwt}></CityComponent>;
  });
  return (
    <>
      <div className="country-cn">
        <div className="country-cn-add-delete">
          <h2>{country.nombre}</h2>
          <button
            className="inputInitialStyle add-btn second-cn edit"
            onClick={editCountry}
          >
            Editar
          </button>
          <button
            className="inputInitialStyle add-btn second-cn"
            onClick={deleteCountry}
          >
            Eliminar
          </button>
        </div>

        <button
          className="inputInitialStyle add-btn second-cn"
          onClick={addCity}
        >
          Agregar ciudad
        </button>
      </div>

      {cityMap}
      {modal === true ? (
        <NewCity
          modal={modal}
          setModal={setModal}
          jwt={jwt}
          countryId={country._id}
        ></NewCity>
      ) : null}
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
              <button className="delete-btn" onClick={deleteRequest}>
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
              <h1>Editar pais</h1>
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
    </>
  );
};

export default CountryComponent;
