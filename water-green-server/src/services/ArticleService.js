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
    await ArticleRepository.destroy({ where: { articleId } });
  }

  async getArticleById(articleId) {
    const article = await ArticleRepository.findByPk(articleId);
    return article;
  }

  async getAllArticles() {
    const articles = await ArticleRepository.findAll();
    return articles;
  }
}

module.exports = new ArticleService();
