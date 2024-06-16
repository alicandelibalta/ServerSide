const express = require('express');
const allRoutes = express.Router();
const usersRouter = require('./userRoutes');

allRoutes.use('/users', usersRouter);

module.exports = allRoutes;


