'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ships', [
      {
        name: 'boat1',
        type: 'competitie 4',
        UserId: 1
      },
      {
        name: 'boat2',
        type: 'wedstrijd 4',
        UserId: 1
      },
      {
        name: 'boat3',
        type: 'wedstrijd 8',
        UserId: 1
      },
      {
        name: 'boat4',
        type: 'competitie 8',
        UserId: 1
      },
      {
        name: 'boat1',
        type: 'competitie 4',
        UserId: 2
      },
      {
        name: 'boat2',
        type: 'competitie 4',
        UserId: 2
      },
      {
        name: 'boat3',
        type: 'competitie 4',
        UserId: 2
      },
      {
        name: 'boat4',
        type: 'competitie 4',
        UserId: 2
      },
      {
        name: 'boat1',
        type: 'wedstrijd 2',
        UserId: 3
      },
      {
        name: 'boat2',
        type: 'competitie 2',
        UserId: 3
      },
      {
        name: 'boat3',
        type: 'competitie 4',
        UserId: 3
      },
      {
        name: 'boat4',
        type: 'wedstrijd 4',
        UserId: 3
      }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ships', null, {});
  }
};
