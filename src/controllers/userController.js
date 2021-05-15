const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const userPage = (req, res) => {
  res.send("Pagina usuario");
};
const createUser = async (req, res) => {
  try {
    const { nombre, apellido, email, password, admin } = req.body;

    const hashedPassword = await bcrypt.hash(
      password,
      saltRounds,
      async function (err, hash) {
        if (hash) {
          const newUser = await User.create({
            nombre,
            apellido,
            email,
            password: hash,
            admin,
          });

          res.status(200).json({
            status: 200,
            mensaje: "Usuario creado exitosamente.",
            newUser,
          });
        } else {
          res.status(400).json({
            status: 400,
            err,
          });
        }
      }
    );
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error,
    });
  }
};
const loginUser = async (req, res) => {
  console.log("en el login..");
  const { email, password } = req.body;
  const users = await User.findOne({
    email: email,
  });
  if (users == null) {
    return res.status(400).json({
      status: 400,
      mensaje: "Este usuario no se encuentra registrado.",
    });
  }
  try {
    await bcrypt.compare(password, users.password, function (err, result) {
      if (result === true) {
        const token = jwt.sign(
          {
            id: users.id,
            username: users.username,
            name: users.name,
            email: users.email,
          },
          process.env.JWT_SECRET_WORD,
          {
            expiresIn: process.env.JWT_EXPIRES,
          }
        );
        if (token) {
          return res.status(200).json({
            status: 200,
            id: users.id,
            username: users.username,
            name: users.name,
            email: users.email,
            token,
            mensaje: "Usuario logeado.",
          });
        }
        return res.status(400).json({
          status: 400,
          error: "bad credentials.",
        });
      } else {
        return res.status(400).json({
          status: 400,
          err,
          mensaje: "Contraseña incorrecta.",
        });
      }
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const { nombre, apellido, email, password } = req.body;
    const datosUsuario = await User.findByIdAndUpdate(usuarioId, {
      nombre,
      apellido,
      email,
      password,
    });
    if (datosUsuario) {
      const nuevosDatos = await User.findById(usuarioId);
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
const deleteUser = async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const usuarioEliminado = await User.findByIdAndRemove(usuarioId);
    if (usuarioEliminado) {
      return res.status(200).json({
        status: 200,
        msj: "Usuario eliminado correctamente.",
      });
    } else {
      return res.status(400).json({
        status: 400,
        msj: "No se ha podido eliminar el usuario.",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};

module.exports = { userPage, createUser, loginUser, updateUser, deleteUser };
