const dotenv = require("dotenv");
const express = require("express");
const connectDb = require("./src/config/db");
dotenv.config({
  path: "./src/config/config.env",
});
connectDb();
const app = express();

const user = require("../data-warehouse/src/routes/user");
const region = require("../data-warehouse/src/routes/region");
const pais = require("../data-warehouse/src/routes/pais");
const ciudad = require("../data-warehouse/src/routes/Ciudad");
const compania = require("../data-warehouse/src/routes/companias");
const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log("EJECUTANDO SERVER EN", process.env.NODE_ENV)
);

process.on("unhandledRejection", (err, promise) => {
  console.log("Errores", err.message);
  server.close(() => process.exit(1));
});
//midlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const path = require("path");

//rutas
app.use("/Data-Warehouse/User", user);
app.use("/Data-Warehouse/Region", region);
app.use("/Data-Warehouse/Pais", pais);
app.use("/Data-Warehouse/Ciudad", ciudad);
app.use("/Data-Warehouse/Compania", compania);

//static

app.use(express.static(path.join(__dirname, "/src", "/public")));
