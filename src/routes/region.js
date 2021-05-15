const express = require("express");
const route = express.Router();
const {
  getRegions,
  postARegion,
  putARegion,
  deleteARegion,
} = require("../controllers/regionController");

route.get("/", getRegions);
route.post("/", postARegion);
route.put("/:id", putARegion);
route.delete("/:id", deleteARegion);

module.exports=route