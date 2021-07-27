import React, { useState } from "react";
import clienteAxios from "../config/axios";
const CompanyComponent = ({ company, data }) => {
  
  const [dot, setDot] = useState("dot-icon");
  const [hidden, setHidden] = useState("hiddenDiv");
  const [active, setActive] = useState("list");
  const [deleteModal, setDeleteModal] = useState(false);
  const [error, guardarError] = useState(false);
  function deleteCompany() {
    setDeleteModal(true);
  }
  function closeModal() {
    setDeleteModal(false);
    
  }
  function deleteCompanyReq() {
    const companyId = company._id;
    clienteAxios
      .delete(`/Company/${companyId}`)
      .then((res) => {
       
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  function hover() {
    setHidden("");
    setDot("dot-icon hidden");
  }
  function endHover() {
    setHidden("hiddenDiv");
    setDot("dot-icon");
  }
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState({
    nombre: "",
    ciudad: "",
    direccion: "",
    email: "",
    telefono: "",
  });
  function selectCity(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
   
  }
  function editCompany() {
    setModal(true);
  }
  
  function handleModal() {
    setModal(false);
    guardarError(false)
  }
  function handleClick(e) {
    e.preventDefault()
    if(value.nombre ==='' || value.ciudad==='' || value.direccion===''||value.email===''||value.telefono===''){
      guardarError(true);
      return;
    }else{
      guardarError(false);
    }
    const companyId=company._id
    clienteAxios
      .put(`/Company/${companyId}`, value)
      .then((res) => {
        if(res.status == 200){
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  const cities = data.map((city) => {
    return (
      <option key={city._id} value={city._id}>
        {city.nombre}
      </option>
    );
  });
  return (
    <>
      <li className={active} onMouseEnter={hover} onMouseLeave={endHover}>
        <div className="name-email-cn company">
          <h2>{company.nombre}</h2>
        </div>
        <div className="name-email-cn company">
          <h2>{company.ciudad[0].nombre}</h2>
        </div>
        <div className="name-email-cn company">
          <h2>{company.direccion}</h2>
        </div>
        <div className="name-email-cn company">
          <h2>{company.email}</h2>
        </div>
        <div className="name-email-cn company">
          <h2>{company.telefono}</h2>
        </div>
        <div className="actions-cn company">
          <ul>
            <div>
              <div className={dot}></div>
              <div className={hidden}>
                <button onClick={deleteCompany} className="trash-icon"></button>
                <button onClick={editCompany} className="update-icon"></button>
              </div>
            </div>
          </ul>
        </div>
      </li>
      {deleteModal === true ? (
        <div className="modal-container">
          <div className="modal-content delete">
            <div className="delete-icon-cn">
              <div className="delete-icon"></div>
            </div>

            <h2>¿Seguro que deseas eliminar la compañia seleccionada?</h2>
            <div className="btn-cn">
              <button className="cancel-btn" onClick={closeModal}>
                Cancelar
              </button>
              <button className="delete-btn" onClick={deleteCompanyReq}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {modal ? (
        <div className="modal-container">
          <div className="modal-content city">
            <div className="modal-contact-and-btn">
              <h1>Editar compañia</h1>
              <button onClick={handleModal}>
                <div className="cross-img"></div>
              </button>
            </div>
            <form>
              <label htmlFor="Company">
                {" "}
                Nombre
                <input type="text" name="nombre" onChange={selectCity}></input>
              </label>
              <label htmlFor="City">
                Ciudad
                <select
                  onChange={selectCity}
                  name="ciudad"
                  value={value.ciudad}
                >
                  <option>Seleccionar...</option>
                  {cities}
                </select>
              </label>
              <label htmlFor="direccion">
                Direccion
                <input
                  type="text"
                  name="direccion"
                  onChange={selectCity}
                ></input>
              </label>
              <label htmlFor="email">
                Email
                <input type="email" name="email" onChange={selectCity}></input>
              </label>
              <label htmlFor="telefono">
                Telefono
                <input
                  type="telefono"
                  name="telefono"
                  onChange={selectCity}
                ></input>
              </label>
              {error ? <p className="error">Todos los campos son obligatorios.</p> : null}
              <input
                type="submit"
                value="EDITAR"
                className="inputInitialStyle"
                onClick={handleClick}
              />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CompanyComponent;
