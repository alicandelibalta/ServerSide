const userService = require('../services/UserService');

class AuthController {

    async createUser(req, res) {
        try {
          const newUser = await userService.createUser(req.body);
          res.status(201).json(newUser);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
};

module.exports = new AuthController();