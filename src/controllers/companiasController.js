const { Compania, Ciudad } = require("../models/index");

const verCompanias = async (req, res) => {
  try {
    const allCompanies = await Compania.find();
    if (allCompanies.length > 0) {
      return res.status(200).json({
        status: 200,
        allCompanies,
        msj: "Devolviendo todas las compañias.",
      });
    } else {
      res.status(200).json({
        status: 400,
        msj: "No se encontaron compañias.",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: 400,
      error,
    });
  }
};

const crearCompania = async (req, res) => {
  try {
    const datosCompania = req.body;
    const nuevaCompania = await Compania.create(datosCompania);
    if (nuevaCompania) {
      res.status(200).json({
        status: 200,
        nuevaCompania,
        msj: "Compañia creada correctamente.",
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se ha podido crear la compañia.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

const actualizarCompania = async (req, res) => {
  try {
    const datosActualizar = req.body;
    const companiaId = req.params.id;
    const nuevaCompania = await Compania.findByIdAndUpdate(
      companiaId,
      datosActualizar
    );
    if (nuevaCompania) {
      const buscarCompania = await Compania.findById(companiaId);
      if (buscarCompania) {
        res.status(200).json({
          status: 200,
          buscarCompania,
          msj: "Compañia actualizada correctamente.",
        });
      } else {
        res.status(400).json({
          status: 400,
          msj: "No se ha podido actualizar la compañia.",
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se ha podido actualizar la compañia.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};

const eliminarCompania = async (req, res) => {
  try {
    const companiaId = req.params.id;
    const deleteCompania = await Compania.findByIdAndDelete(companiaId);
    if (deleteCompania) {
      res.status(200).json({
        status: 200,
        msj: "Compañia eliminada correctamente.",
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se ha podido eliminar la compañia.",
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
  verCompanias,
  crearCompania,
  actualizarCompania,
  eliminarCompania,
};
