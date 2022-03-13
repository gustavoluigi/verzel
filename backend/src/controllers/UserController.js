const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, password, email } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(409).json('E-mail já cadastrado.');
    }

    const user = await User.create({ name, password, email });

    return res.json(user);
  },
};
