'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TrainingShip',
        'boat_number',
         {
          type: Sequelize.INTEGER
          , length: 1

        }
      )
    }
  }
