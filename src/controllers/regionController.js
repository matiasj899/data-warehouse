const { Region} = require("../models/index");

const getRegions = async (req, res) => {
  try {
    const allRegions = await Region.find();
    if (allRegions) {
      res.status(200).json({
        status: 200,
        allRegions,
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se han encontrado regiones.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};

const postARegion = async (req, res) => {
  try {
    const nuevaRegion = await Region.create(req.body);
    if (nuevaRegion) {
      res.status(200).json({
        status: 200,
        nuevaRegion,
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se ha podido crear la region.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};
const putARegion = async (req, res) => {
  try {
    const regionId = req.params.id;
    const nombre = req.body;
    const datosRegion = await Region.findByIdAndUpdate(regionId, nombre);
    if (datosRegion) {
      const nuevosDatos = await Region.findById(regionId);
      return res.status(200).json({
        status: 200,
        nuevosDatos,
        msj: "Datos actualizados correctamente.",
      });
    } else {
      return res.status(400).json({
        status: 400,
        msj: "No se han podido actualizar los datos.",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error,
    });
  }
};

const deleteARegion = async (req, res) => {
  try {
    const regionId = req.params.id;
    const eliminarRegion = await Region.findByIdAndRemove(regionId);
    if (eliminarRegion) {
      res.status(200).json({
        status: 200,
        msj: "Region eliminada correctamente.",
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se ha podido eliminar la region",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};

module.exports = { getRegions, postARegion, putARegion, deleteARegion };
