const User = require('../models/user');

class UserService {
  async createUser(userData) {
    const newUser = await User.create(userData);
    return newUser;
  }

  async updateUser(id, userData) {
    await User.update(userData, { where: { id } });
    return await User.findByPk(id); // Güncellenmiş kullanıcıyı döndür
  }

  async deleteUser(id) {
    await User.destroy({ where: { id } });
  }

  async getUserById(id) {
    const user = await User.findByPk(id);
    return user;
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }
}

module.exports = new UserService();
