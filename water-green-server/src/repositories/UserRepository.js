const User = require('../models/User');

class UserRepository {
  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id); //findByPk ORM query metotu bunun için sequalize metotlarına bak.
  }

  async create(user) {
    return await User.create(user);
  }

  async update(id, user) {
    return await User.update(user, { where: { id } });
  }

  async delete(id) {
    return await User.destroy({ where: { id } });
  }
}

module.exports = new UserRepository();



