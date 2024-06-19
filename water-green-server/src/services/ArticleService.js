const Article = require('../models/article');
const ArticleViewModel = require('../viewModels/articleViewModel');

class ArticleService {
  async createArticle(articleViewModel) {
    const articleData = ArticleViewModel.toDatabaseModel(articleViewModel);
    const newArticle = await Article.create(articleData);
    return ArticleViewModel.toViewModel(newArticle);
  }

  async updateArticle(articleId, articleViewModel) {
    const articleData = ArticleViewModel.toDatabaseModel(articleViewModel);
    await Article.update(articleData, { where: { articleId } });
    return ArticleViewModel.toViewModel(articleData);
  }

  async deleteArticle(articleId) {
    await Article.destroy({ where: { articleId } });
  }

  async getArticleById(articleId) {
    const article = await Article.findByPk(articleId);
    return ArticleViewModel.toViewModel(article);
  }

  async getAllArticles() {
    const articles = await Article.findAll();
    return ArticleViewModel.toViewModels(articles);
  }
}

module.exports = new ArticleService();
