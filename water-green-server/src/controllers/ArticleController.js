const articleService = require('../services/ArticleService');

class ArticleController {

  async createArticle(req, res) {
    try {
      const newArticle = await articleService.createArticle(req.body);
      res.status(201).json(newArticle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateArticle(req, res) {
    try {
      const updatedArticle = await articleService.updateArticle(req.params.id, article);
      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

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
