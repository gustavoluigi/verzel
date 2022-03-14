module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('classes', [
      {
        name: 'Módulo 01',
        date: '10/03/2022',
        id_module: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('classes', null, {});
  },
};
