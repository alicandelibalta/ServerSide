const Article = require('../models/Article');

class ArticleRepository {
  async findAll() { 
    return await Article.findAll();
  }

  async findById(articleId) {
    return await Article.findByPk(articleId); //findByPk ORM query metotu bunun için sequalize metotlarına bak.
  }

  async findByUserId(id) {
    return await Article.findOne({ where: { id } }); 
  }

  async create(article) {
    return await Article.create(article);
  }

  async update(articleId, article) {
    return await Article.update(article, { where: { articleId } });
  }

  async delete(articleId) {
    return await Article.destroy({ where: { articleId } });
  }
}

module.exports = new ArticleRepository();



