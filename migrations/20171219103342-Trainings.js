'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Trainings',
        'boat',
         {
          type: Sequelize.STRING

        }
      )
    }
  }
