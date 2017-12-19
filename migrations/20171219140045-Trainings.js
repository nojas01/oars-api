'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [

     queryInterface.addColumn('Trainings',
        'boat_1_name',
        {
          type: Sequelize.STRING
        }),
     queryInterface.addColumn('Trainings',
        'boat_2_name',
        {
          type: Sequelize.STRING
        }),
     queryInterface.addColumn('Trainings',
        'boat_3_name',
        {
          type: Sequelize.STRING
        }),
     queryInterface.addColumn('Trainings',
        'boat_4_name',
        {
          type: Sequelize.STRING
        })
      ]
    }
  }
