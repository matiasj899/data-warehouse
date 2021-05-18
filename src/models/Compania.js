const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const companiaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  ciudad: [{ type: Schema.Types.ObjectId, ref: "Ciudad" }],
});

module.exports = mongoose.model("Compania", companiaSchema);
