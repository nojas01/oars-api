'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ships', [
      {
        name: 'boat1',
        type: 'competitie 4',

      },
      {
        name: 'boat2',
        type: 'wedstrijd 4',

      },
      {
        name: 'boat3',
        type: 'wedstrijd 8',

      },
      {
        name: 'boat4',
        type: 'competitie 8',

      },
      {
        name: 'boat1',
        type: 'competitie 4',

      },
      {
        name: 'boat2',
        type: 'competitie 4',

      },
      {
        name: 'boat3',
        type: 'competitie 4',

      },
      {
        name: 'boat4',
        type: 'competitie 4',

      },
      {
        name: 'boat1',
        type: 'wedstrijd 2',

      },
      {
        name: 'boat2',
        type: 'competitie 2',

      },
      {
        name: 'boat3',
        type: 'competitie 4',

      },
      {
        name: 'boat4',
        type: 'wedstrijd 4',

      }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ships', null, {});
  }
};
