module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TrainingRowers', [
      {
        boat_number: 2,
        RowerId: 1,
        TrainingId: 1
     },
      {
        boat_number: 2,
        RowerId: 2,
        TrainingId: 1
     },
      {
        boat_number: 2,
        RowerId: 3,
        TrainingId: 1
     },
      {
        boat_number: 2,
        RowerId: 4,
        TrainingId: 1
     },
      {
        boat_number: 2,
        RowerId: 1,
        TrainingId: 4
     },
      {
        boat_number: 2,
        RowerId: 2,
        TrainingId: 4
     },
      {
        boat_number: 2,
        RowerId: 3,
        TrainingId: 4
     },
      {
        boat_number: 2,
        RowerId: 4,
        TrainingId: 4
     },
      {
        boat_number: 3,
        RowerId: 1,
        TrainingId: 4
     },
      {
        boat_number: 3,
        RowerId: 2,
        TrainingId: 4
     },
      {
        boat_number: 3,
        RowerId: 3,
        TrainingId: 4
     },
      {
        boat_number: 3,
        RowerId: 4,
        TrainingId: 4
     }])
   },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('TrainingRowers', null, {});
    }
};
