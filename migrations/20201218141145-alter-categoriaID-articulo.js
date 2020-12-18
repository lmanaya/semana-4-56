'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Articulos', 'categoriaId', {
      type: Sequelize.INTEGER,
        allowNull: false,
        references: { // User belongsTo Company 1:1
          model: 'Categoria',
          key: 'id'
        },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Articulos')
  }
};

