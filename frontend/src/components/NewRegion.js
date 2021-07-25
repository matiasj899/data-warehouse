import React, { useState } from "react";
import clienteAxios from "../config/axios";

const NewRegion = ({ modal, setModal, jwt }) => {
  const [region, setRegion] = useState({ nombre: "" });
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
  function createRegion(e) {
    console.log(e.target.value);
    setRegion({ ...region, [e.target.name]: e.target.value });
  }
  function handleClick(e) {
    e.preventDefault();
    if (region.nombre === "") {
      guardarError(true);
      guardarloginError(false);
      return;
    } else {
      guardarError(false);
    }
    clienteAxios
      .post("/Region/", region, axiosConfig)
      .then((res) => {
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
          <h1>Crear nueva region</h1>
          <button onClick={handleModal}>
            <div className="cross-img"></div>
          </button>
        </div>
        <form>
          <label htmlFor="Region">
            {" "}
            Nombre
            <input type="text" name="nombre" onChange={createRegion}></input>
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

export default NewRegion;
