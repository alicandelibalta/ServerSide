class Editors {
  constructor(userId, userName, password, role, createdDate, deletedDate) {
    super(userId, userName, password, role);
    this.createdDate = createdDate;
    this.deletedDate = deletedDate;
  }

  name(name) {
    this.name = name;
  }

  articleId (articleId) {
    this.articleId = articleId;
  }

  writerId (writerId) {
    this.writerId = writerId;
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

module.exports = Editors;
