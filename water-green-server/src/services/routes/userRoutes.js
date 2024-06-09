const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UserController');

router.get('/', UsersController.findUsers);
router.post('/', UsersController.createUser);
router.get('/:id', UsersController.getUser);
router.delete('/:id', UsersController.deleteUser);

module.exports = router;
