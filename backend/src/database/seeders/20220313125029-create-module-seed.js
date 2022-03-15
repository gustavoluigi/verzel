module.exports = {
  // eslint-disable-next-line consistent-return
  async up(queryInterface, Sequelize) {
    const module = await queryInterface.rawSelect('modules', {
      where: {
        id: 1,
      },
    }, ['id']);

    if (!module) {
      return queryInterface.bulkInsert('modules', [
        {
          name: 'Módulo 01',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('modules', null, {});
  },
};
