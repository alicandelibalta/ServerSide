
module.exports = (userId, { userRepository }) => {
    return userRepository.getUser(userId);
  };
