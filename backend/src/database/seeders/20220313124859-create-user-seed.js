const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await queryInterface.rawSelect('users', {
      where: {
        id: 1,
      },
    }, ['id']);

    if (!user) {
      return queryInterface.bulkInsert('users', [
        {
          name: 'Usuário',
          email: 'usuario@verzel.com.br',
          password: bcrypt.hashSync('1234', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
