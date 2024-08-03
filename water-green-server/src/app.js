const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/adminRoutes');

const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorHandler');


const app = express();

//middlewares
app.use((req, res, next) => {
    if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
      bodyParser.json()(req, res, next);
    } else {
      next();
    }
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

//routes
app.use('/admin', router);

//swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

module.exports = app;
