'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TrainingShip',
        'id',
         {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
      )
    }
  }
