const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json('E-mail não encontrado.');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json('Senha inválida');
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

    const userWithoutPass = JSON.parse(JSON.stringify(user));
    delete userWithoutPass.password;

    return res.json({
      user: userWithoutPass,
      token,
    });
  },
};
