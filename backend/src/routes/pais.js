const express=require("express");
const route=express.Router();

const {crearPais,leerPaises,actualizarPais,eliminarPais}=require("../controllers/paisController")

route.post("/:id",crearPais);
route.get("/",leerPaises);
route.put("/:id",actualizarPais);
route.delete("/:id",eliminarPais);


module.exports=route