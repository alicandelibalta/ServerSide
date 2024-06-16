const getUser = require('../../application/crud/admin/GetUser');
const createUser = require('../../application/crud/admin/CreateUser');
const getAllUser = require('../../application/crud/admin/GetAllUser')
const userRepository = require('../../infrastructure/repositories/UserSolidRepository');

class UserController {
  async getUser(req, res) {
    try {
      const user = await getUser(req.params.id, { userRepository });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUser(res) {
    try {
      const user = await getAllUser({ userRepository });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res,) {
    try {
      const { userId, firstName, lastName, email, password, role } = req.body;
      const userName = `${firstName} ${lastName}`;
      const user = await createUser(userId, userName, password, role, email, { userRepository });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // async removeUser(req, res) {
  //   try {
  //     const success = await removeUser(req.params.id, { userRepository });
  //     if (success) {
  //       res.status(200).json({ message: 'User removed' });
  //     } else {
  //       res.status(404).json({ message: 'User not found' });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }

  // async updateUser(req, res) {
  //   try {
  //     const { firstName, lastName, email, password, role } = req.body;
  //     const userData = { firstName, lastName, email, password, role };
  //     const user = await updateUser(req.params.id, userData, { userRepository });
  //     if (user) {
  //       res.status(200).json(user);
  //     } else {
  //       res.status(404).json({ message: 'User not found' });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }

  // async findUsers(req, res) {
  //   try {
  //     const users = await findUsers({ userRepository });
  //     res.status(200).json(users);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }
}

module.exports = new UserController();
