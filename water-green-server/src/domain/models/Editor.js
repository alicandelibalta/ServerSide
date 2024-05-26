const User = require("./User");

module.exports = class Editor extends User {
  constructor(userId, userName, password, role, email) {
    super(userId, userName, password, role, email);
    this.createdDate = new Date(); // Constructor içinde başlatılıyor
    this.isDeleted = false; 
    this.createdBy = null;
    this.isActive = true;

  }

  setCreatedDate(createdDate) {
    this.createdDate = createdDate;
  }
  
  setCreatedBy(createdBy) {
    this.createdBy = createdBy;
  }

  setIsDeleted(isDeleted) {
    this.isDeleted = isDeleted;
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }
}

