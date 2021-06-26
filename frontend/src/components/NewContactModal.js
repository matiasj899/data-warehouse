import e from "cors";
import React,{useState} from "react";
const NewContact = ({ modal, setModal }) => {
  const[percent,setPercent]=useState("0%")
  function handleModal() {
    setModal(false);
  }
  function handleBar(e){
    
    setPercent(e.target.value)
    

  }
  function handleBtn(e){
    console.log(e.target.value)
    
    

  }
  function moveRight(e){
    console.log(e.target.value)
  }
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
                ></input>
              </div>
              <div>
                <label forhtml="Apellido">
                  Apellido<span>*</span>
                </label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                ></input>
              </div>
              <div>
                <label forhtml="Cargo">
                  Cargo<span>*</span>
                </label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                ></input>
              </div>
              <div>
                <label forhtml="Email">
                  Email<span>*</span>
                </label>
                <input
                  className="inputInitialStyle newContact"
                  type="email"
                ></input>
              </div>
              <div>
                <label forhtml="Company">
                  Compañia<span>*</span>
                </label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                ></input>
              </div>
            </form>
          </div>
        </div>
        <div className="extra-div"></div>
        <div className="new-contact-info-cn">
          <form>
            <div>
              <label forhtml="region">Region</label>
              <select className="inputInitialStyle newContact">
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
              </select>
            </div>
            <div>
              <label forhtml="Pais">Pais</label>
              <select className="inputInitialStyle newContact">
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
                <option value="Latam">Latam</option>
              </select>
            </div>
            <div>
              <label forhtml="Ciudad">Ciudad</label>
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
                name="Direccion"
                className="inputInitialStyle newContact"
                placeholder="Ingrese una direccion"
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
                <div className="bar-content-color" style={{
                 width:percent
                }}>
                  <div className="bar-btn" onClick={handleBtn} onMouseDown={moveRight}>
                  <span>
                  </span>
                  </div>
                 
                </div>
              </div>
              <select className="inputInitialStyle newContact percent" onChange={handleBar}>
                <option value="0%" >0%</option>
                <option value="25%">25%</option>
                <option value="50%">50%</option>
                <option value="75%">75%</option>
                <option value="100%">100%</option>
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
                name="Direccion"
                className="inputInitialStyle newContact"
                placeholder="Ingrese una direccion"
              ></input>
            </div>
            <div>

            </div>
            
          </form>
        </div>      
      <div className="save-and-cancel-cn">
        <div className="btn-cn">
        <button className="cancel-btn">

        </button>
        <button className="save-btn">
          
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewContact;
