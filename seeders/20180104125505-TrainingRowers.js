module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TrainingRowers', [
      {
        boat_number: 1,
        RowerId: 1,
        TrainingId: 1
     },
      {
        boat_number: 1,
        RowerId: 2,
        TrainingId: 1
     },
      {
        boat_number: 1,
        RowerId: 3,
        TrainingId: 1
     },
      {
        boat_number: 1,
        RowerId: 4,
        TrainingId: 1
     },
      {
        boat_number: 2,
        RowerId: 5,
        TrainingId: 1
     },
      {
        boat_number: 2,
        RowerId: 6,
        TrainingId: 1
     },
      {
        boat_number: 2,
        RowerId: 7,
        TrainingId: 1
     },
      {
        boat_number: 2,
        RowerId: 8,
        TrainingId: 1
     },
      {
        boat_number: 3,
        RowerId: 9,
        TrainingId: 1
     },
      {
        boat_number: 3,
        RowerId: 10,
        TrainingId: 1
     },
      {
        boat_number: 3,
        RowerId: 11,
        TrainingId: 1
     },
      {
        boat_number: 3,
        RowerId: 12,
        TrainingId: 1
     },
      {
        boat_number: 4,
        RowerId: 13,
        TrainingId: 1
     },
      {
        boat_number: 4,
        RowerId: 14,
        TrainingId: 1
     },
      {
        boat_number: 4,
        RowerId: 15,
        TrainingId: 1
     },
      {
        boat_number: 4,
        RowerId: 16,
        TrainingId: 1
     },
      {
        boat_number: 4,
        RowerId: 9,
        TrainingId: 2
     },
      {
        boat_number: 2,
        RowerId: 9,
        TrainingId: 3
     },
      {
        boat_number: 4,
        RowerId: 9,
        TrainingId: 4
     },
      {
        boat_number: 3,
        RowerId: 9,
        TrainingId: 5
     },
   ])
   },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('TrainingRowers', null, {});
    }
};
