const express = require("express");
const route = express.Router();
const {
  verCompanias,
  crearCompania,
  actualizarCompania,
  eliminarCompania,
} = require("../controllers/companiasController");

route.get("/", verCompanias);
route.post("/", crearCompania);
route.put("/:id", actualizarCompania);
route.delete("/:id", eliminarCompania);

module.exports = route;
