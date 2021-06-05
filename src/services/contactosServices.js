const { Contactos } = require("../models/index");
//const {contactosId}=require("../controllers/contactosController")


const eliminarById= async (contactosId)=>{
    for (const id of contactosId) {
        const eliminarContacto = await Contactos.findByIdAndDelete(id);
        
      }
      return "Contactos eliminados."
}


module.exports={eliminarById}