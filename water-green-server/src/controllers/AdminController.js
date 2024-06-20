
const userService = require('../services/UserService');
const UserViewModel = require('../viewModels/userViewModel');
const articleService = require('../services/ArticleService');
const ArticleViewModel = require('../viewModels/articleViewModel');

class AdminController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      const userViewModels = UserViewModel.toViewModels(users);
      res.json(userViewModels);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (user) {
        const userViewModel = UserViewModel.toViewModel(user);
        res.json(userViewModel);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const userViewModel = new UserViewModel(req.body);
      const newUser = await userService.createUser(userViewModel);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update an existing user
  async updateUser(req, res) {
    try {
      const userViewModel = new UserViewModel(req.body);
      const updatedUser = await userService.updateUser(req.params.id, userViewModel);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete an existing user
  async deleteUser(req, res) {
    try {
      await userService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //Article Controllers
  async createArticle(req, res) {
    try {
      const articleViewModel = new ArticleViewModel(req.body);
      const newArticle = await articleService.createArticle(articleViewModel);
      res.status(201).json(newArticle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update an existing article
  async updateArticle(req, res) {
    try {
      const articleViewModel = new ArticleViewModel(req.body);
      const updatedArticle = await articleService.updateArticle(req.params.id, articleViewModel);
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

  // Diğer CRUD metotları burada
}

module.exports = new AdminController();
