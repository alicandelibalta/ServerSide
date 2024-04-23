class Admins {
  constructor(adminId) {
    this.adminId = adminId;
  }
  
  name(name) {
    this.name = name;
  }

  editorId(editorId) {
    this.editorId = editorId;
  }

  writerId (writerId) {
    this.writerId = writerId;
  }

  articleId (articleId) {
    this.articleId = articleId;
  }

  createdDate(createdDate) {
    this.createdDate = createdDate;
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

module.exports = Admins;
