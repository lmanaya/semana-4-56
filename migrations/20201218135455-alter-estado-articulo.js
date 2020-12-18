'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Articulos', 'estado', {
      type: Sequelize.INTEGER,
      defaultValue: 1
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Articulos')
  }
};
