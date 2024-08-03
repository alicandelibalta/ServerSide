const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

// User endpoints
router.get('/getAll', AdminController.getAllUsers);
router.get('/getUserById/:id', AdminController.getUserById);
router.post('/createUser', AdminController.createUser);
router.put('/updateUser/:id', AdminController.updateUser);
router.delete('/deleteUser/:id', AdminController.deleteUser);

// Article endpoints
router.post('/createArticle', AdminController.createArticle);
router.put('/updateArticle/:id', AdminController.updateArticle);
router.delete('/deleteArticle/:id', AdminController.deleteArticle);

module.exports = router;
