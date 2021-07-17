const { Contactos } = require("../models/index");
//const {contactosId}=require("../controllers/contactosController")

const eliminarById = async (contactosId) => {
  for (const id of contactosId) {
    const checkUser = await Contactos.findById(id);
    if (checkUser) {
      const eliminarContacto = await Contactos.findByIdAndRemove(id);
    }
  }
  return "Contactos eliminados.";
};

module.exports = { eliminarById };
