import React, { useEffect, useState } from "react";
import Header from "./Header";
import clienteAxios from "../config/axios";
import CompanyComponent from "./CompanyComponent";
const Company = () => {
  const [data, setData] = useState([]);
  const [NoCompany, setNoCompany] = useState(false);
  const [companyList, setCompanyList] = useState([]);
  const [error, guardarError] = useState(false);
  useEffect(() => {
    clienteAxios
      .get("/Ciudad")
      .then((res) => {
        setData(res.data.todasLasCiudades);
      })
      .catch((error) => console.log(error));
    clienteAxios
      .get("/Company")
      .then((res) => {
        if (res.data.status === 400) {
          setNoCompany(true);
        } else {
          setCompanyList(res.data.allCompanies);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const [modal, setModal] = useState(false);
  const [value, setValue] = useState({
    nombre: "",
    ciudad: "",
    direccion: "",
    email: "",
    telefono: "",
  });

  function addCompany() {
    setModal(true);
  }
  function handleModal() {
    setModal(false);
    guardarError(false);
  }

  function handleClick(e) {
    e.preventDefault();
    if (
      value.nombre === "" ||
      value.ciudad === "" ||
      value.direccion === "" ||
      value.email === "" ||
      value.telefono === ""
    ) {
      guardarError(true);
      return;
    } else {
      guardarError(false);
    }
    clienteAxios
      .post("/Company", value)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  }
  function selectCity(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  const cities = data.map((city) => {
    return (
      <option key={city._id} value={city._id}>
        {city.nombre}
      </option>
    );
  });

  const companies = companyList.map((company) => {
    return (
      <CompanyComponent
        key={company._id}
        company={company}
        data={data}
      ></CompanyComponent>
    );
  });
  return (
    <div>
      <Header></Header>
      <div className="add-company-cn">
        <h1>Compañias</h1>
        <button className="inputInitialStyle add-btn" onClick={addCompany}>
          Agregar
        </button>
      </div>
      {NoCompany ? (
        <div id="noCompany-cn">
          <div id="noContacts-container">
            <p className="noContacts-message">
              Aun no hay compañias, crea una.
            </p>
          </div>
        </div>
      ) : (
        <ul className="ul-Container">
          <li className="list first-row company">
            <div className="name-email-cn user">
              <h2>Nombre</h2>
            </div>
            <div className="company-cn user">
              <h2>Ciudad</h2>
            </div>
            <div className="company-cn user">
              <h2>Direccion</h2>
            </div>
            <div className="company-cn user">
              <h2>Email</h2>
            </div>
            <div className="company-cn user">
              <h2>Telefono</h2>
            </div>
            <div className="company-cn user">
              <h2>Acciones</h2>
            </div>
          </li>
          {companies}
        </ul>
      )}
      {modal ? (
        <div className="modal-container">
          <div className="modal-content city">
            <div className="modal-contact-and-btn">
              <h1>Crear nueva compañia</h1>
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
              {error ? (
                <p className="error">Todos los campos son obligatorios.</p>
              ) : null}
              <input
                type="submit"
                value="CREAR"
                className="inputInitialStyle"
                onClick={handleClick}
              />
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Company;
