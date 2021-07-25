import React, { useState, useEffect } from "react";
import Header from "./Header";
import clienteAxios from "../config/axios";

import NewContact from "./NewContactModal";
import { Link, NavLink, Redirect } from "react-router-dom";
import useUser from "../hooks/useUser";
import ListOfContacts from "./listOfContacts";
import EditContact from "./EditContact";

const Contactos = (props) => {
  const isAdmin = window.sessionStorage.getItem("admin");
  let array = [];
  const [contactos, setcontactos] = useState([]);
  const [result, setResult] = useState(contactos);
  const [noContacts, setNoContacts] = useState(false);
  const [modal, setModal] = useState(false);
  const [editModal,setEditModal]=useState(false)
  const { isLogged, logOut } = useUser();
  const [count, setCount] = useState([]);
  const [deleteArray, setdeleteArray] = useState([]);
  const [selected, setSelected] = useState(false);
  const [allCheckbox, setAllCheckbox] = useState(false);
  const [hidden, setHidden] = useState(true);

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
  useEffect(() => {
    if (allCheckbox === true) {
      setSelected(true);
      setCount(deleteArray.length);
    } else {
      setSelected(false);
      setCount(null);
    }
    if (deleteArray.length > 0) {
      setSelected(true);
      setCount(deleteArray.length);
    } else {
      setSelected(false);
      setCount(null);
    }
  }, [deleteArray]);

  function handleClick(e) {
    setAllCheckbox(!allCheckbox);
    const numberOfUsers = contactos.map((number) => {
      array.push(number._id);
      setdeleteArray(array);
    });
    setCount(array.length);
    setSelected(!selected);
    if (allCheckbox === true) {
      setdeleteArray([]);
      setCount(null);
    }
  }
  function deleteUser(e) {
    const jsonArray = JSON.stringify(deleteArray);
    props.history.push(`/Contactos/${jsonArray}`);
  }
  const listaContactos = contactos.map((contacto) => (
    <ListOfContacts
      key={contacto._id}
      contacto={contacto}
      props={props}
      allCheckbox={allCheckbox}
      hiddenCheckbox={hidden}
      setHiddenCheckbox={setHidden}
      array={array}
      count={count}
      setCount={setCount}
      selected={selected}
      setSelected={setSelected}
      deleteArray={deleteArray}
      setdeleteArray={setdeleteArray}
      editModal={editModal}
      setEditModal={setEditModal}
    />
  ));

  function showModal() {
    setModal(true);
  }
  function searcher(e) {
    let value = e.target.value;
    let find = [];
    console.log(value);
    find = result.filter((eachResult) => {
      console.log(eachResult);
      const inputValue = e.target.value.toLowerCase().replace(/\s/g, "");
      const name = eachResult.nombre.toLowerCase().replace(/\s/g, "");
      const lastname = eachResult.apellido.toLowerCase();
      const country = eachResult.pais[0].nombre.toLowerCase();
      const position = eachResult.cargo.toLowerCase();
      const city=eachResult.ciudad[0].nombre.toLowerCase()
      const email=eachResult.email.toLowerCase()
      const company=eachResult.compañia[0].nombre.toLowerCase().replace(/\s/g, "");
      const fullname= name + lastname
      const region=eachResult.region[0].nombre.toLowerCase()
      return (
        name.includes(inputValue) ||
        lastname.includes(inputValue) ||
        country.includes(inputValue) ||
        position.includes(inputValue) ||
        city.includes(inputValue) ||
        email.includes(inputValue)||
        company.includes(inputValue)||
        fullname.includes(inputValue)
        ||
        region.includes(inputValue)
      );
    });
    setcontactos(find);
  }

  return (
    <div id="contacts-main-cn">
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
      {selected ? (
        <div className="select-and-delete">
          <div className="selected-items-cn">
            <p className="selected-items-p">{count} seleccionados</p>
          </div>
          <button className="selected-items-p" onClick={deleteUser}>
            Eliminar contactos
          </button>
        </div>
      ) : null}
      {modal === true ? <NewContact modal={modal} setModal={setModal} /> : null}
      {editModal === true ? <EditContact modal={modal} setModal={setModal} /> : null}
      {noContacts === true ? (
        <div id="noContacts-container">
          {" "}
          <p className="noContacts-message">
            Aun no existen contactos, agrega uno.
          </p>
        </div>
      ) : (
        <ul className="ul-Container">
          <li className="list first-row">
            {hidden ? (
              <label>
                <input
                  type="checkbox"
                  value="checkedAll"
                  onChange={handleClick}
                  checked={allCheckbox}
                ></input>
              </label>
            ) : (
              <label>
                <input
                  id="hidden-checkbox"
                  type="hidden"
                  value="checkedAll"
                  onChange={handleClick}
                  checked={allCheckbox}
                ></input>
              </label>
            )}

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
