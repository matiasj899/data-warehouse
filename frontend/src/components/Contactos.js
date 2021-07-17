import React, { useState, useEffect } from "react";
import Header from "./Header";
import clienteAxios from "../config/axios";

import NewContact from "./NewContactModal";
import { Link, NavLink, Redirect } from "react-router-dom";
import useUser from "../hooks/useUser";
import ListOfContacts from "./listOfContacts";

const Contactos = (props) => {
  const isAdmin = window.sessionStorage.getItem("admin");
  const [contactos, setcontactos] = useState([]);
  const [result, setResult] = useState(contactos);
  const [noContacts, setNoContacts] = useState(false);
  const [modal, setModal] = useState(false);
  const { isLogged, logOut } = useUser();

  useEffect(() => {
    console.log("desde use effect");
    clienteAxios
      .get("/Contactos")
      .then((res) => {
        setcontactos(res.data.buscarContactos);
        setResult(res.data.buscarContactos);
      })
      .catch((err) => {
        if (err) {
          setNoContacts(true);
        }
      });
  }, []);

  const listaContactos = contactos.map((contacto) => (
    <ListOfContacts key={contacto._id} contacto={contacto} props={props}/>
  ));

  function showModal() {
    setModal(true);
  }
  function searcher(e) {
    let value = e.target.value;
    let find = [];
    console.log(value);
    find = result.filter((eachResult) => {
      return eachResult.nombre === e.target.value;
    });
    setcontactos(find);
  }
  console.log(result);
  return (
    <div>
      <Header adminValue={isAdmin} />
      <h1 className="logo contacts-title">Contactos</h1>
      <div className="search-and-add">
        <form>
          <label htmlFor="search">
            <input
              type="search"
              id="contacts-search"
              className="inputInitialStyle search-bar"
              onChange={searcher}
            ></input>
          </label>
          <button className="inputInitialStyle search-btn">
            <div className="search-img"></div>
          </button>
        </form>
        <button className="inputInitialStyle add-btn" onClick={showModal}>
          Agregar contacto
        </button>
      </div>

      {modal === true ? <NewContact modal={modal} setModal={setModal} /> : null}
      {noContacts === true ? (
        <p>Aun no existen contactos, agrega uno.</p>
      ) : (
        <ul className="ul-Container">
          <li className="list first-row">
            <label>
              <input type="checkbox"></input>
            </label>
            <div className="name-email-cn">
              <h2>Contacto</h2>
            </div>
            <div className="country-region-cn">
              <h2>Pais/Region</h2>
            </div>
            <div className="company-cn">
              <h2>Compañia</h2>
            </div>
            <div className="position-cn">
              <h2>Cargo</h2>
            </div>
            <div className="interest-cn">
              <h2>Interes</h2>
            </div>
            <div className="actions-cn">
              <h2>Acciones</h2>
            </div>
          </li>
          {listaContactos}
        </ul>
      )}
    </div>
  );
};

export default Contactos;
