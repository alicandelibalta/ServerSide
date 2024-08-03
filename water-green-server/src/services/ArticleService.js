const ArticleRepository = require('../repositories/ArticleRepository');

class ArticleService { 
  async createArticle() {
    const newArticle = await ArticleRepository.create(); 
    return newArticle;
  }

  async updateArticle(articleId) {
    await ArticleRepository.update({ where: { articleId } });
  }

  async deleteArticle(articleId) {
    await ArticleRepository.delete({ where: { articleId } });
  }

  async getArticleById(articleId) {
    const article = await ArticleRepository.findById(articleId);
    return article;
  }

  async getArticleByUserId(articleId) {
    const article = await ArticleRepository.findByUserId(articleId);
    return article;
  }

  async getAllArticles() {
    const articles = await ArticleRepository.findAll();
    return articles;
  }
}

module.exports = new ArticleService();
