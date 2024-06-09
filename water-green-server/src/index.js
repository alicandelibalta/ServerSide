const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'src/.env.development') });

// console.log("DB_DATABASE:", process.env.DB_DATABASE); // Değerleri kontrol etmek için bu satırı ekleyin

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./infrastructure/orm/sequelize/ormModels');
const allRoutes = require('./services/routes/allRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', allRoutes);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Veritabanını senkronize etme
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
