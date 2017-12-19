'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TrainingRower',
        'id',
         {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
      )
    }
  }
