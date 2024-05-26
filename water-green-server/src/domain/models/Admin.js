
module.exports = class Admin {
  constructor(adminId, adminName, adminEmail, password) {
    this.adminId = adminId;
    this.adminName = adminName;
    this.adminEmail = adminEmail;
    this.password = password;
    this.createdDate = new Date();
    this.createdBy = null;
    this.isDeleted = false;
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

//Burası model sınıflarına bir örnektir.
//Constructor içinde her şeyi tanımlayalım ki tutarlı olsun. 
//Constructor içinde her şeyin ilk değerini verelim.