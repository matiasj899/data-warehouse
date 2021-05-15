const { Region, Pais } = require("../models/index");

const crearPais = async (req, res) => {
  try {
    const regionId = req.params.id;
    const pais = req.body;
    const nuevoPais = await Pais.create(pais);

    if (nuevoPais) {
      const regionPais = await Region.findByIdAndUpdate(
        regionId,
        { $push: { paises: { ...nuevoPais } } },
        { new: true, useFindAndModify: false }
      );
      return res.status(200).json({
        status: 200,
        regionPais,
      });
    } else {
      return res.status(400).json({
        status: 400,
        msj: "No se ha podido crear el pais.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};
const leerPaises = async (req, res) => {
  try {
    const todosLosPaises = await Pais.find();
    if (todosLosPaises) {
      res.status(200).json({
        status: 200,
        todosLosPaises,
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
const actualizarPais = async (req, res) => {
 try {
     const paisId=req.params.id;
     const nombre=req.body;
     const datosPais= await Pais.findByIdAndUpdate(paisId,nombre);
     if(datosPais){
        const buscarPais=await Pais.findById(paisId)
        return res.status(200).json({
            status:200,
            buscarPais,
            msj:"Pais actualizado correctamente."
        })
     }else{
         return res.status(400).json({
             status:200,
             msj:"No se han podido actualizar los datos."
         })
     }
 } catch (error) {
    return res.status(400).json({
        status:200,
        error
    })
 }
};
const eliminarPais = async (req, res) => {
    try {
        const paisId = req.params.id;
        const eliminarPais = await Pais.findByIdAndRemove(paisId);
        if (eliminarPais) {
          res.status(200).json({
            status: 200,
            msj: "Pais eliminada correctamente.",
          });
        } else {
          res.status(400).json({
            status: 400,
            msj: "No se ha podido eliminar el Pais",
          });
        }
      } catch (error) {
        res.status(400).json({
          status: 400,
          error,
        });
      }
};

module.exports = { crearPais, leerPaises, actualizarPais, eliminarPais };
