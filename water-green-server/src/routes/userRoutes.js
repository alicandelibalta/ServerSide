const express = require("express");
const bcrypt = require('bcrypt');
const routerUser = express.Router();

const AuthController = require("../controllers/AuthController");

routerUser.post("/createUser", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try { 
    // Şifreyi hashleyin
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcı verilerini hazırlayın
    req.body = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    };

    await AuthController.createUser(req, res);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error occurred while creating user" });
  }
});

module.exports = routerUser;
