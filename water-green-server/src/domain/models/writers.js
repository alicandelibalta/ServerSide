const Users = require("./users");

class Writers extends Users {
  constructor(userId, userName, password, role, createdDate, deletedDate) {
    super(userId, userName, password, role);
    this.createdDate = createdDate;
    this.deletedDate = deletedDate;
  }

  articleId(articleId) {
    this.articleId = articleId;
  }

  createdBy(createdBy) {
    this.createdBy = createdBy;
  }

  isDeleted(isDeleted) {
    this.isDeleted = isDeleted;
  }

  isActive(isActive) {
    this.isActive = isActive;
  }
}

module.exports = Writers;
