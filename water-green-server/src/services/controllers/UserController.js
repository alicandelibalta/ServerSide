const db = require('../../infrastructure/orm/sequelize/ormModels');

exports.findUsers = async (req, res) => {
  try {
    const users = await db.UserOrm.findAll();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createUser = async (req, res) => {
  try {
    const { userId, userName, email, password, role } = req.body;
    const newUser = await db.UserOrm.create({ userId, userName, email, password, role });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await db.UserOrm.findByPk(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await db.UserOrm.findByPk(req.params.id);
    if (!user) return res.status(404).send('User not found');
    await user.destroy();
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
