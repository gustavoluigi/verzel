const { Model, DataTypes } = require('sequelize');

class Class extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        date: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Module, { foreignKey: 'id_module', as: 'module' });
  }
}

module.exports = Class;
