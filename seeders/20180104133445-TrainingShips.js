'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TrainingShips', [
      {
        boat_number: 2,
        ShipId: 1,
        TrainingId: 1
     },
      {
        boat_number: 2,
        ShipId: 2,
        TrainingId: 1
     },
      {
        boat_number: 2,
        ShipId: 3,
        TrainingId: 1
     },
      {
        boat_number: 2,
        ShipId: 4,
        TrainingId: 1
     },
      {
        boat_number: 2,
        ShipId: 1,
        TrainingId: 4
     },
      {
        boat_number: 2,
        ShipId: 2,
        TrainingId: 4
     },
      {
        boat_number: 2,
        ShipId: 3,
        TrainingId: 4
     },
      {
        boat_number: 2,
        ShipId: 4,
        TrainingId: 4
     },
      {
        boat_number: 3,
        ShipId: 1,
        TrainingId: 4
     },
      {
        boat_number: 3,
        ShipId: 2,
        TrainingId: 4
     },
      {
        boat_number: 3,
        ShipId: 3,
        TrainingId: 4
     },
      {
        boat_number: 3,
        ShipId: 4,
        TrainingId: 4
      }
     ])
   },


  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('TrainingShips', null, {});

  }
};
