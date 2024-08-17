const express = require('express');
const routerAdmin = express.Router();
const AdminController = require('../controllers/AdminController');

// User endpoints
routerAdmin.get('/getAll', AdminController.getAllUsers);
routerAdmin.get('/getUserById/:id', AdminController.getUserById);
routerAdmin.post('/createUser', AdminController.createUser);
routerAdmin.put('/updateUser/:id', AdminController.updateUser);
routerAdmin.delete('/deleteUser/:id', AdminController.deleteUser);
// ArtAdminicle endpoints
routerAdmin.post('/createArticle', AdminController.createArticle);
routerAdmin.put('/updateArticle/:id', AdminController.updateArticle);
routerAdmin.delete('/deleteArticle/:id', AdminController.deleteArticle);

module.exports = routerAdmin;
