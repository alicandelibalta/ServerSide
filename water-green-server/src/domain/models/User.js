module.exports = class User {
  constructor(userId, firstName, lastName, password, role, email) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }
};
