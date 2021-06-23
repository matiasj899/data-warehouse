import React from "react";
const NewContact = ({ modal, setModal }) => {
  function handleModal() {
    setModal(false);
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
                <label forhtml="Nombre">Nombre<span>*</span></label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                ></input>
              </div>
              <div>
                <label forhtml="Apellido">Apellido<span>*</span></label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                ></input>
              </div>
              <div>
                <label forhtml="Cargo">Cargo<span>*</span></label>
                <input
                  className="inputInitialStyle newContact"
                  type="text"
                ></input>
              </div>
              <div>
                <label forhtml="Email">Email<span>*</span></label>
                <input
                  className="inputInitialStyle newContact"
                  type="email"
                ></input>
              </div>
              <div>
                <label forhtml="Company">Compañia<span>*</span></label>
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
            <input type="text" name="Direccion" className="inputInitialStyle newContact" placeholder="Ingrese una direccion"></input>
            </div>
            
            

          </form>
        </div>
        
      </div>
    </div>
  );
};

export default NewContact;
