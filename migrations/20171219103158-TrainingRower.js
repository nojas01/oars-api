'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TrainingRower',
        'boat_number',
         {
          type: Sequelize.INTEGER
          , length: 1

        }
      )
    }
  }
