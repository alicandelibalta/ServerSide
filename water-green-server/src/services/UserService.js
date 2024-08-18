const UserRepository = require ('../repositories/UserRepository');

class UserService {
  async createUser(userData) {
    const newUser = await UserRepository.create(userData);
    return newUser;
  }

  async updateUser(id, userData) {
    await UserRepository.update(userData, { where: { id } });
    return await UserRepository.findById(id);
  }

  async deleteUser(id) {
    await UserRepository.delete({ where: { id } });
  }

  async getUserById(id) {
    const user = await UserRepository.findById(id);
    return user;
  }

  async getAllUsers() {
    const users = await UserRepository.findAll();
    return users;
  }
}

module.exports = new UserService();
