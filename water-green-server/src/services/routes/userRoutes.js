const express = require('express');
const userRoutes = express.Router();
const UserController = require('../controllers/UserController');

console.log(UserController);

userRoutes.post('/createUser', UserController.createUser);

userRoutes.get('/getUser/:id', UserController.getUser);

userRoutes.get('/getAllUser', UserController.getAllUser);


module.exports = userRoutes;
