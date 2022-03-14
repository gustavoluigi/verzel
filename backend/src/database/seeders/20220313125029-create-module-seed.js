module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('modules', [
      {
        name: 'Módulo 01',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('modules', null, {});
  },
};
