import React, { useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const NewContact = ({ modal, setModal }) => {
  const [region, setRegion] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [company,setCompany]=useState([]);
  const [countryForm,setCountryForm]=useState(false)
  const [cityForm,setCityForm]=useState(false)
  const [contact, setContact] = useState({
    nombre: "",
    apellido: "",
    cargo: "",
    email: "",
    compañia: "",
    region: "",
    pais: "",
    ciudad: "",
    direccion: "",
    interes: "",
  });
  useEffect(() => {
    clienteAxios
      .get("/Region")
      .then((res) => {
        console.log(res);
        setRegion(res.data.allRegions);
      })
      .catch((error) => console.log(error));
    clienteAxios
      .get("/Company")
      .then((res) => {
        console.log(res);
        setCompany(res.data.allCompanies)
      })
      .catch((error) => console.log(error));
  }, []);
  const [percent, setPercent] = useState("0");
  function handleModal() {
    setModal(false);
  }
  function handleBar(e) {
    setPercent(e.target.value);
  }
  function handleBtn(e) {
    console.log(e.target.value);
  }
  function moveRight(e) {
    console.log(e.target.value);
  }
  function selectCompany(e) {}
  function selectRegion(e) {
    const regionId = region.filter(
      (eachRegion) => eachRegion._id === e.target.value
    );
    const paises = regionId.map((country) => country.paises);
    setCountry(paises[0]);
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
    setCountryForm(true)
  }
  console.log(contact);
  function selectCountry(e) {
    const countryId = country.filter(
      (eachCountry) => eachCountry._id === e.target.value
    );
    console.log(countryId);
    const cities = countryId.map((country) => country.ciudades);

    setCity(cities[0]);
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
    setCityForm(true)
  }
  function contactForm(e){
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  const regions = region.map((eachRegion) => {
    return (
      <option key={eachRegion._id} value={eachRegion._id}>
        {eachRegion.nombre}
      </option>
    );
  });
  const countries = country.map((pais) => {
    return (
      <option key={pais._id} value={pais._id}>
        {pais.nombre}
      </option>
    );
  });
  const cities = city.map((eachCity) => {
    return (
      <option key={eachCity._id} value={eachCity._id}>
        {eachCity.nombre}
      </option>
    );
  });
  const companies=company.map((eachCompany)=>{
    return (
      <option key={eachCompany._id} value={eachCompany._id}>
        {eachCompany.nombre}
      </option>);
  })
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-contact-and-btn-cn">
          <div className="modal-contact-and-btn">
            <h1>Nuevo contacto</h1>
            <button onClick={handleModal}>
              <div className="cross-img"></div>
            </button>
          </div>
          <div className="new-contact-cn">
            <form>
              <div>
                <label forhtml="Nombre">
                  Nombre<span>*</span>
                </label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                  name="nombre"
                  onChange={contactForm}
                ></input>
              </div>
              <div>
                <label forhtml="Apellido">
                  Apellido<span>*</span>
                </label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                  name="apellido"
                  onChange={contactForm}
                ></input>
              </div>
              <div>
                <label forhtml="Cargo">
                  Cargo<span>*</span>
                </label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                  name="cargo"
                  onChange={contactForm}
                ></input>
              </div>
              <div>
                <label forhtml="Email">
                  Email<span>*</span>
                </label>
                <input
                  className="inputInitialStyle newContact"
                  type="email"
                  name="email"
                  onChange={contactForm}
                ></input>
              </div>
              <div>
                <label forhtml="Company">
                  Compañia<span>*</span>
                </label>
                <select className="inputInitialStyle newContact" name="compañia" onChange={contactForm} defaultValue={''}>
                <option value="" disabled>Seleccionar compañia</option>
                {companies}
              </select>
              </div>
            </form>
          </div>
        </div>
        <div className="extra-div"></div>
        <div className="new-contact-info-cn">
          <form>
            <div>
              <label forhtml="region">Region</label>
              <select
                className="inputInitialStyle newContact"
                name="region"
                onChange={selectRegion}
              >
                <option value="" selected="true" disabled="disabled">Seleccionar region</option>
                {regions}
              </select>
            </div>
            <div>
              <label forhtml="Pais">Pais</label>
              {countryForm?<select
                className="inputInitialStyle newContact"
                onChange={selectCountry}
                name="pais"
                
              >
                <option value="" selected="true" disabled="disabled" >Seleccionar pais</option>
                {countries}
              </select>:<select
                className="inputInitialStyle newContact disable"
                disabled
                
              ><option value="">Seleccionar pais</option></select>}
            </div>
            <div>
              <label forhtml="Ciudad">Ciudad</label>
              {cityForm?  <select className="inputInitialStyle newContact" name="ciudad" onChange={contactForm}>
                <option value="" selected="true" disabled="disabled">Seleccionar ciudad</option>
                {cities}
              </select>:  <select className="inputInitialStyle newContact disable" disabled>
                <option value="" selected="true" disabled="disabled">Seleccionar ciudad</option>
              </select>}
              
            </div>
            <div>
              <label forhtml="Direccion">Direccion</label>
              <input
                type="text"
                name="direccion"
                className="inputInitialStyle newContact "
                placeholder="Ingrese una direccion"
                onChange={contactForm}
              ></input>
            </div>
            <div>
              <label forhtml="Interes">Interes</label>
              <div className="bar-and-value-cn">
                <div className="bar-cn">
                  <div className="bar-content"></div>
                  <div className="bar-content"></div>
                  <div className="bar-content"></div>
                  <div className="bar-content"></div>
                  <div
                    className="bar-content-color"
                    style={{
                      width: percent,
                    }}
                  >
                    <div
                      className="bar-btn"
                      onClick={handleBtn}
                      onMouseDown={moveRight}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
                <select
                  className="inputInitialStyle newContact percent"
                  onChange={handleBar}
                >
                  <option value="0">0%</option>
                  <option value="25">25%</option>
                  <option value="50">50%</option>
                  <option value="75">75%</option>
                  <option value="100">100%</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="new-contact-info-cn">
          <form>
            <div>
              <label forhtml="CanalDeContacto">Canal de contacto</label>
              <select className="inputInitialStyle newContact">
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
              </select>
            </div>
            <div>
              <label forhtml="Cuenta de usuario">Cuenta de usuario</label>
              <select className="inputInitialStyle newContact">
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
              </select>
            </div>
            <div>
              <label forhtml="Preferencias">Preferencias</label>
              <select className="inputInitialStyle newContact">
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
              </select>
            </div>
            <div>
              <label forhtml="Direccion">Direccion</label>
              <input
                type="text"
              
                className="inputInitialStyle newContact"
                placeholder="Ingrese una direccion"
                
              ></input>
            </div>
            <div></div>
          </form>
        </div>
        <div className="save-and-cancel-cn">
          <div className="btn-cn">
            <button className="cancel-btn"></button>
            <button className="save-btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
