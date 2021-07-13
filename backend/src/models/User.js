const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true ,unique:true},
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
});

module.exports = mongoose.model("User", UserSchema);
