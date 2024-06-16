const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'src/.env.development') });

// console.log("DB_DATABASE:", process.env.DB_DATABASE); //Control DB.

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./infrastructure/orm/sequelize/ormModels');
const allRoutes = require('./services/routes/allRoutes');
const userRoutes = require('./services/routes/userRoutes');
const { swaggerUi, swaggerDocs } = require('./services/swagger/swagger');

const app = express();
const port = process.env.PORT || 4000;

// Middlewares.
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', allRoutes);
app.use('/', userRoutes);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const swaggerDocument = require('./swagger.json'); // Swagger JSON dosyanız

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Database synchronization.
db.sequelize
  .sync()
  .then(() => {
    console.log("Veritabanı senkronize edildi.");
  })
  .catch((err) => {
    console.error("Veritabanı senkronize edilemedi:", err);
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
