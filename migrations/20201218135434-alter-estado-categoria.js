'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Categoria', 'estado', {
      type: Sequelize.INTEGER,
      defaultValue: 1
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Categoria')
  }
};
