const sequelize = require("../orm/sequelize/sequelize");
const User = require("../../domain/models/User");
const UserRepository = require("../../domain/abstract/UserRepository");

module.exports = class UserSolidRepository extends UserRepository {
  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model("User");
  }

  async getUser(userId) {
    const seqUser = await this.model.findByPk(userId);
    return new User(
      seqUser.userId,
      seqUser.firstName,
      seqUser.lastName,
      seqUser.email,
      seqUser.password,
      seqUser.role
    );
  }

  async getAllUser() {
    const seqUsers = await this.model.findAll();
    return seqUsers.map((seqUser) => {
      return new User(
        seqUser.userId,
        seqUser.firstName,
        seqUser.lastName,
        seqUser.email,
        seqUser.password,
        seqUser.role
      );
    });
  }


  // async remove(userId) {
  //   const seqUser = await this.model.findByPk(userId);
  //   if (seqUser) {
  //     return seqUser.destroy();
  //   }
  //   return false;
  // }

  // async updateUser(userEntity) {
  //   const seqUser = await this.model.findByPk(userEntity.id);

  //   if (!seqUser) return false;

  //   const { firstName, lastName, email, password } = userEntity;
  //   await seqUser.update({ firstName, lastName, email, password });

  //   return new User(
  //     seqUser.id,
  //     seqUser.firstName,
  //     seqUser.lastName,
  //     seqUser.email,
  //     seqUser.password,
  //     seqUser.role
  //   );
  // }

  // async getByEmail(userEmail) {
  //   const seqUser = await this.model.findOne({ where: { email: userEmail } });
  //   return new User(
  //     seqUser.id,
  //     seqUser.firstName,
  //     seqUser.lastName,
  //     seqUser.email,
  //     seqUser.password,
  //     seqUser.role
  //   );
  // }

  async createUser(userEntity) {
    const { userId, firstName, lastName, email, password } = userEntity;
    const seqUser = await this.model.create({
      userId,
      firstName,
      lastName,
      email,
      password,
      role
    });
    await seqUser.save();

    return new User(
      seqUser.userId,
      seqUser.firstName,
      seqUser.lastName,
      seqUser.email,
      seqUser.password,
      seqUser.role
    );
  }

 
};
