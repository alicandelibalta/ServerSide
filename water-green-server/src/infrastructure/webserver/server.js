const path = require('path');
require('dotenv').config({ path: '.env.development' });

console.log('DB_DATABASE:', process.env.DB_DATABASE); // Değerleri kontrol etmek için bu satırı ekleyin

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Veritabanını senkronize etme
db.sequelize.sync()
  .then(() => {
    console.log('Veritabanı senkronize edildi.');
  })
  .catch(err => {
    console.error('Veritabanı senkronize edilemedi:', err);
  });

// Basit bir GET endpointi
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Veritabanına bağlanan bir örnek endpoint
app.get('/users', async (req, res) => {
  try {
    const users = await db.user.findAll();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Yeni kullanıcı eklemek için bir POST endpointi
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await db.user.create({ name, email });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
