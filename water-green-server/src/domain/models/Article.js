module.exports = class Article {
  constructor(id, creatorId, createdDate) {
    this.id = id;
    this.creatorId = creatorId;
    this.createdDate = new Date(); // Constructor içinde başlatılıyor
  }

  setCreatedDate(createdDate) {
    this.createdDate = createdDate;
  }

  title(title) {
    this.title = title;
  }

  content(content) {
    this.content = content;
  }
  
  articleCategory (articleCategory) {
    this.articleCategory = articleCategory;
  }

  articleRank (articleRank) {
    this.articleRank = articleRank;
  }

  isDeleted(isDeleted) {
    this.isDeleted = isDeleted;
  }


}
