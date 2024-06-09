const express = require('express');
const router = express.Router();
const usersRouter = require('./userRoutes');

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use('/users', usersRouter);

module.exports = router;


