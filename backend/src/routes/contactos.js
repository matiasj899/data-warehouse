const express = require("express");
const route = express.Router();
const {
  verContactos,
  crearContactos,
  actualizarContactos,
  eliminarContactos,
} = require("../controllers/contactosController");

route.get("/", verContactos);
route.post("/", crearContactos);
route.put("/:id", actualizarContactos);
route.delete("/:id", eliminarContactos);

module.exports = route;
