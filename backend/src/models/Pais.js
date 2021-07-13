const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const paisSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ciudades: [{ type: Schema.Types.ObjectId, ref: "Ciudad" }],
});

module.exports = mongoose.model("Pais", paisSchema);
