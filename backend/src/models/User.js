const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: {
          type: DataTypes.STRING,
          set(value) {
            this.setDataValue('password', bcrypt.hashSync(value, 8));
          },
        },
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = User;
