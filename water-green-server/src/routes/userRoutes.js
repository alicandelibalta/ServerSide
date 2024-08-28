const express = require("express");
const routerUser = express.Router();

const AuthController = require("../controllers/AuthController");

routerUser.post("/createUser", AuthController.createUser);
routerUser.post("/login", AuthController.loginUser);
routerUser.get("/profile/:id", AuthController.getUserProfile);

module.exports = routerUser;
