const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ciudadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
});

module.exports = mongoose.model("Ciudad", ciudadSchema);
