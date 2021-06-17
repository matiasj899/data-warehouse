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
          <button onClick={handleModal}><div className="cross-img"></div></button>
        </div>
          </div>
        
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NewContact;
