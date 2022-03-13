const { Model, DataTypes } = require('sequelize');

class Module extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Class, { foreignKey: 'id_module', as: 'classes' });
  }
}

module.exports = Module;
