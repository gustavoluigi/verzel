module.exports = {
  async up(queryInterface, Sequelize) {
    const lesson = await queryInterface.rawSelect('classes', {
      where: {
        id: 1,
      },
    }, ['id']);

    if (!lesson) {
      return queryInterface.bulkInsert('classes', [
        {
          name: 'Módulo 01',
          date: '2022-03-10',
          id_module: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('classes', null, {});
  },
};
