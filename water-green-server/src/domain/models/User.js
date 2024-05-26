module.exports = class User {
  constructor(userId, userName, password, role, email) {
    this.userId = userId;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.role = role;
  }
};
