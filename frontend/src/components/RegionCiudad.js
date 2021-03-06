import React, { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Header from "./Header";
import NewRegion from "./NewRegion";
import RegionComponent from "./RegionComponent";
const RegionCiudad = () => {
  const [data, setData] = useState([]);
  const [noRegion,setNoRegion]=useState(false)
  const jwt = window.sessionStorage.getItem("jwt");
  useEffect(() => {
    clienteAxios
      .get("/Region")
      .then((res) => {
        setData(res.data.allRegions);
      })
      .catch((err) => {
    setNoRegion(true)});
  }, []);

  const [modal, setModal] = useState(false);
  function showModal() {
    setModal(true);
  }
  const regionData = data.map((region) => {
    return <RegionComponent key={region._id} region={region} jwt={jwt} />;
  });
  return (
    <div>
      <Header></Header>
      <div className="add-region-cn">
        <button className="inputInitialStyle add-btn" onClick={showModal}>
          Agregar region
        </button>
      </div>
      {noRegion?(<div id="noCompany-cn">
          <div id="noContacts-container">
            <p className="noContacts-message">
              Aun no hay regiones, crea una.
            </p>
          </div>
        </div>):null}
      {regionData}
      {modal === true ? (
        <NewRegion modal={modal} setModal={setModal} jwt={jwt}></NewRegion>
      ) : null}
    </div>
  );
};

export default RegionCiudad;
