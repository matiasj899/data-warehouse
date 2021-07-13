const User = require("../models/User");
const jwt = require("jsonwebtoken");
const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    try {
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET_WORD);

      const userFromToken = await User.findById(decodedUser.id);

      if (userFromToken.admin == 1) {
        next();
      } else {
        res.status(400).json({
          status: 400,
          mensaje: "acceso denegado.",
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 400,
        mensaje: error,
      });
    }
  }
};

module.exports = isAdmin;
