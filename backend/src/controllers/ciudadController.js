const { Region, Pais, Ciudad } = require("../models/index");

const crearCiudad = async (req, res) => {
  try {
    const paisId = req.params.id;
    const ciudad = req.body;
    const nuevaCiudad = await Ciudad.create(ciudad);

    if (nuevaCiudad) {
      const paisCiudad = await Pais.findByIdAndUpdate(
        paisId,
        { $push: { ciudades: { ...nuevaCiudad } } },
        { new: true, useFindAndModify: false }
      );
      return res.status(200).json({
        status: 200,
        paisCiudad,
      });
    } else {
      return res.status(400).json({
        status: 400,
        msj: "No se ha podido crear la ciudad.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};

const leerCiudades = async (req, res) => {
  try {
    const todasLasCiudades = await Ciudad.find();
    if (todasLasCiudades) {
      res.status(200).json({
        status: 200,
        todasLasCiudades,
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se han encontrado ciudades.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};

const actualizarCiudad = async (req, res) => {
  try {
    const ciudadId = req.params.id;
    const nombre = req.body;
    const datosCiudad = await Ciudad.findByIdAndUpdate(ciudadId, nombre);
    if (datosCiudad) {
      const buscarCiudad = await Ciudad.findById(ciudadId);
      return res.status(200).json({
        status: 200,
        buscarCiudad,
        msj: "Ciudad actualizada correctamente.",
      });
    } else {
      return res.status(400).json({
        status: 400,
        msj: "No se han podido actualizar los datos.",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 200,
      error,
    });
  }
};

const eliminarCiudad = async (req, res) => {
  try {
    const ciudadId = req.params.id;
    const eliminarCiudad = await Ciudad.findByIdAndRemove(ciudadId);
    if (eliminarCiudad) {
      res.status(200).json({
        status: 200,
        msj: "Ciudad eliminada correctamente.",
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se ha podido eliminar la ciudad",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};

module.exports = {
  crearCiudad,
  leerCiudades,
  actualizarCiudad,
  eliminarCiudad,
};
