import React, { useState } from "react";

const ListOfContacts = ({ contacto, props }) => {
  let array = [];
  const [dot, setDot] = useState("dot-icon");
  const [hidden, setHidden] = useState("hiddenDiv");
  const [active, setActive] = useState("list");

  function deleteUser(e) {
    array.push(contacto._id);
    const jsonArray = JSON.stringify(array);
    props.history.push(`/Contactos/${jsonArray}`);
  }

  function hover() {
    setHidden("");
    setDot("dot-icon hidden");
  }
  function endHover() {
    setHidden("hiddenDiv");
    setDot("dot-icon");
  }
  return (
    <li className={active} onMouseEnter={hover} onMouseLeave={endHover}>
      <label>
        <input type="checkbox"></input>
      </label>
      <div className="name-email-cn">
        <h2>{contacto.nombre + " " + contacto.apellido}</h2>
        <p className="contacts-p">{contacto.email}</p>
      </div>
      <div className="country-region-cn">
        <h2>{contacto.pais[0].nombre}</h2>
        <p className="contacts-p">{contacto.region[0].nombre}</p>
      </div>
      <div className="company-cn">
        <h2>{contacto.compañia[0].nombre}</h2>
      </div>
      <div className="position-cn">
        <h2>{contacto.cargo}</h2>
      </div>
      <div className="interest-cn margin-bar">
        <h2>{contacto.interes}%</h2>
        <div className="progress-bar-container">
          {contacto.interes === "100" ? (
            <div className="progress-bar interest-100"></div>
          ) : null}
          {contacto.interes === "75" ? (
            <div className="progress-bar interest-75"></div>
          ) : null}
          {contacto.interes === "50" ? (
            <div className="progress-bar interest-50"></div>
          ) : null}
          {contacto.interes === "25" ? (
            <div className="progress-bar interest-25"></div>
          ) : null}
          {contacto.interes === "0" ? (
            <div className="progress-bar interest-0"></div>
          ) : null}
        </div>
      </div>
      <div className="actions-cn">
        <ul>
          <div>
            <div className={dot}></div>
            <div className={hidden}>
              <button className="trash-icon" onClick={deleteUser}></button>
              <button className="update-icon"></button>
            </div>
          </div>
        </ul>
      </div>
    </li>
  );
};

export default ListOfContacts;
