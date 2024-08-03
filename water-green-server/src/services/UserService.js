const UserRepository = require ('../repositories/UserRepository');

class UserService {
  async createUser(userData) {
    const newUser = await UserRepository.create(userData);
    return newUser;
  }

  async updateUser(id, userData) {
    await UserRepository.update(userData, { where: { id } });
    return await UserRepository.findByPk(id); // Güncellenmiş kullanıcıyı döndür
  }

  async deleteUser(id) {
    await UserRepository.destroy({ where: { id } });
  }

  async getUserById(id) {
    const user = await UserRepository.findByPk(id);
    return user;
  }

  async getAllUsers() {
    const users = await UserRepository.findAll();
    return users;
  }
}

module.exports = new UserService();
