const { Contactos } = require("../models/index");
const contactosServices = require("../services/contactosServices");

const verContactos = async (req, res) => {
  try {
    const buscarContactos = await Contactos.find()
      .populate("ciudad")
      .populate("compañia")
      .populate("region")
      .populate("pais", "nombre");
    if (buscarContactos.length > 0) {
      res.status(200).json({
        status: 200,
        buscarContactos,
        msj: "Todos los contactos.",
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se han encontrado contactos.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};
const crearContactos = async (req, res) => {
  try {
    const contactoData = req.body;
    const nuevoContacto = await Contactos.create(contactoData);
    if (nuevoContacto) {
      res.status(200).json({
        status: 200,
        nuevoContacto,
        msj: "Contacto creado correctamente.",
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se ha podido crear el contacto.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

const actualizarContactos = async (req, res) => {
 
  try {
    const contactoId = req.params.id;
    const contactoData = req.body;
    const nuevoContacto = await Contactos.findByIdAndUpdate(
      contactoId,
      contactoData
    );
    if (nuevoContacto) {
      const buscarContacto = await Contactos.findById(contactoId);
      if (buscarContacto) {
        res.status(200).json({
          status: 200,
          nuevoContacto,
          msj: "Contacto actualizado correctamente.",
        });
      } else {
        res.status(400).json({
          status: 400,
          msj: "No se ha podido actualizar el contacto.",
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se ha podido actualizar el contacto.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};
const eliminarContactos = async (req, res) => {
  try {
    const contactosId = JSON.parse(req.params.id);
    console.log(req.params.id);
    const eliminarContacto = await contactosServices.eliminarById(contactosId);

    if (eliminarContacto) {
      res.status(200).json({
        status: 200,
        msj: "Contactos eliminados correctamente.",
      });
    } else {
      res.status(400).json({
        status: 400,
        msj: "No se han podido eliminar los contactos correctamente.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

module.exports = {
  verContactos,
  crearContactos,
  actualizarContactos,
  eliminarContactos,
};
