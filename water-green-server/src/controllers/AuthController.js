const userService = require('../services/UserService');
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../helpers/authHelpers');

// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../.env.development') });

class AuthController {
  
    async createUser(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await userService.createUser({
                firstName,
                lastName,
                email,
                password: hashedPassword,
            });

            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;

            const user = await userService.getUserByEmail(email);
            if (!user) {
                return res.status(401).json({ message: 'Invalid ID or password' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid ID or password' });
            }

            // JWT Token oluştur
            const token = generateToken({ id: user.id, email: user.email });
            
            // Token'ı ve user ı front end e gönder.
            res.json({ token, user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserProfile(req, res) {
      try {
          const token = req.headers['authorization'].split(' ')[1]; // Token'ı Authorization headerdan al
    
          const decoded = verifyToken(token); 

          // Token'dan alınan Id ile kullanıcıyı buluyoruz.
          const user = await userService.getUserById(decoded.id);
          if (!user) {
              return res.status(404).json({ message: 'User not found' });
          }

          res.json(user); // Kullanıcı bilgisini front ende gönder.
      } catch (error) {
          res.status(401).json({ error: 'Unauthorized' });
      }
  }


}

module.exports = new AuthController();
