
const articleService = require('../services/ArticleService');
// const ArticleViewModel = require('../viewModels/articleViewModel');

class ArticleController {
  // Create a new article
  async createArticle(req, res) {
    try {
      const article = new Article(req.body);
      const newArticle = await articleService.createArticle(article);
      res.status(201).json(newArticle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update an existing article
  async updateArticle(req, res) {
    try {
      const article = new Article(req.body);
      const updatedArticle = await articleService.updateArticle(req.params.id, article);
      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete an existing article
  async deleteArticle(req, res) {
    try {
      await articleService.deleteArticle(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ArticleController();
