import React, { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Header from "./Header";
import NewRegion from "./NewRegion";
import RegionComponent from "./RegionComponent";
const RegionCiudad = () => {
  const [data, setData] = useState([]);
  const jwt = window.sessionStorage.getItem("jwt");
  useEffect(() => {
    console.log("desde use effect");
    clienteAxios
      .get("/Region")
      .then((res) => {
        console.log(res)
        setData(res.data.allRegions);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
 
  
  const [modal, setModal] = useState(false);
  function showModal() {
    setModal(true);
  }
  const regionData=data.map(region=>{
    
    return(
        <RegionComponent  key={region._id} region={region} jwt={jwt}/>
    )
})
  return (
    <div>
      <Header></Header>
      <div className="add-region-cn">
        <button className="inputInitialStyle add-btn" onClick={showModal}>
          Agregar region
        </button>
       
      </div>
      {regionData}
      {modal === true ? (
        <NewRegion modal={modal} setModal={setModal} jwt={jwt}></NewRegion>
      ) : null}
      
    </div>
  );
};

export default RegionCiudad;
