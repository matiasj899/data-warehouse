const User = require("../models/User");
//const {contactosId}=require("../controllers/contactosController")


const eliminarById= async (usersArray)=>{
   for(const usuarioId of usersArray){
      const checkUser=await User.findById(usuarioId)
      if(checkUser){
        const usuarioEliminado = await User.findByIdAndRemove(usuarioId);
 
      }
    }
    return "Usuarios eliminados."
}


module.exports={eliminarById}