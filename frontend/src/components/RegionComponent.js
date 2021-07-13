import React, { useState } from "react";
import NewCountry from "./NewCountry";
import CountryComponent from "./CountryComponent";
const RegionComponent = ({ region, jwt }) => {
  const [modal, setModal] = useState(false);
  function showModal() {
    setModal(true);
  }
  function addCountry() {
    showModal();
  }
  const countries = region.paises.map((country) => {
    return (
      <CountryComponent key={country._id} country={country}></CountryComponent>
    );
  });
  return (
    <div className='region-cn'>
      <div className='add-country-cn'>
        <h1>{region.nombre}</h1>
        <button className='inputInitialStyle add-btn second-cn'onClick={addCountry}>Agregar pais</button>
      </div>

      {countries}
      {modal === true ? (
        <NewCountry
          modal={modal}
          setModal={setModal}
          jwt={jwt}
          regionId={region._id}
        ></NewCountry>
      ) : null}
    </div>
  );
};

export default RegionComponent;
