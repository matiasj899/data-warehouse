const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ContactosSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cargo: { type: String, required: true },
  email: { type: String, required: true },
  compañia: [{ type: Schema.Types.ObjectId, ref: "Compania" }],
  region: [{ type: Schema.Types.ObjectId, ref: "Region" }],
  pais: [{ type: Schema.Types.ObjectId, ref: "Pais" }],
  ciudad: [{ type: Schema.Types.ObjectId, ref: "Ciudad" }],
  direccion: { type: String, required: true },
  interes: { type: String, required: true },
});

module.exports = mongoose.model("Contactos", ContactosSchema);
