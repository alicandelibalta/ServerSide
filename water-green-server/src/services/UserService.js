const User = require('../models/user');
const UserViewModel = require('../viewModels/userViewModel');

class UserService {
  async createUser(userViewModel) {
    const userData = UserViewModel.toDatabaseModel(userViewModel);
    const newUser = await User.create(userData);
    return UserViewModel.toViewModel(newUser);
  }

  async updateUser(id, userViewModel) {
    const userData = UserViewModel.toDatabaseModel(userViewModel);
    await User.update(userData, { where: { id } });
    return UserViewModel.toViewModel(userData);
  }

  async deleteUser(id) {
    await User.destroy({ where: { id } });
  }

  async getUserById(id) {
    const user = await User.findByPk(id);
    return UserViewModel.toViewModel(user);
  }

  async getAllUsers() {
    const users = await User.findAll();
    return UserViewModel.toViewModels(users);
  }
}

module.exports = new UserService();
