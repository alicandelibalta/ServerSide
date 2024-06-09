const User = require('../../../domain/models/User');

module.exports = (userId, firstName, lastName, password, role, email, { userRepository }) => {
  const user = new User(userId, firstName, lastName, email, password, role);
  return userRepository.persist(user);
};
