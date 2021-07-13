const express=require("express");
const route=express.Router();

const {crearCiudad,leerCiudades,actualizarCiudad,eliminarCiudad}=require("../controllers/ciudadController.js")

route.post("/:id",crearCiudad);
route.get("/",leerCiudades);
route.put("/:id",actualizarCiudad);
route.delete("/:id",eliminarCiudad);


module.exports=route