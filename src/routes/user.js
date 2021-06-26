const express = require("express");
const route = express.Router();
const {createUser,loginUser,getUsers,updateUser,deleteUser}=require("../controllers/userController")
const isAdmin=require("../middlewares/usersMiddlewares")

route.get("/",isAdmin,getUsers)
route.post("/signup",isAdmin, createUser);
route.post("/login", loginUser);
route.put("/:id",isAdmin,updateUser);
route.delete("/:id",isAdmin, deleteUser);



module.exports = route;