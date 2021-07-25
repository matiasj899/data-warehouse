import React, { useState } from "react";
import clienteAxios from "../config/axios";
const NewCity = ({ modal, setModal, countryId, jwt }) => {
  console.log(countryId);
  const [pais, setPais] = useState({ nombre: "" });
  const [error, guardarError] = useState(false);
  const [loginError, guardarloginError] = useState(false);
  const axiosConfig = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  function handleModal() {
    setModal(false);
  }
  function createCountry(e) {
    console.log(e.target.value);
    setPais({ ...pais, [e.target.name]: e.target.value });
  }
  function handleClick(e) {
    e.preventDefault();
    if (pais.nombre === "") {
      guardarError(true);
      guardarloginError(false);
      return;
    } else {
      guardarError(false);
    }
    clienteAxios
      .post(`/Ciudad/${countryId}`, pais, axiosConfig)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="modal-container">
      <div className="modal-content region">
        <div className="modal-contact-and-btn">
          <h1>Crear nueva ciudad</h1>
          <button onClick={handleModal}>
            <div className="cross-img"></div>
          </button>
        </div>
        <form>
          <label htmlFor="Region">
            {" "}
            Nombre
            <input type="text" name="nombre" onChange={createCountry}></input>
            {error ? <p className="error">Campos obligatorios.</p> : null}
          </label>
          <input
            type="submit"
            value="CREAR"
            className="inputInitialStyle"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
};

export default NewCity;
