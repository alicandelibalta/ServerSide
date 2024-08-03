const Article = require('../models/article');

class ArticleService { 
  async createArticle() {
    const newArticle = await Article.create(); 
    return newArticle;
  }

  async updateArticle(articleId) {
    await Article.update({ where: { articleId } });
  }

  async deleteArticle(articleId) {
    await Article.destroy({ where: { articleId } });
  }

  async getArticleById(articleId) {
    const article = await Article.findByPk(articleId);
    return article;
  }

  async getAllArticles() {
    const articles = await Article.findAll();
    return articles;
  }
}

module.exports = new ArticleService();
