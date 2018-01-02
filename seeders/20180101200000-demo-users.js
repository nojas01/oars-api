const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          username: 'coach1',
          password: bcrypt.hashSync('123456', 10)
        },
        {
          username: 'coach2',
          password: bcrypt.hashSync('123456', 10)
        },
        {
          username: 'coach3',
          password: bcrypt.hashSync('123456', 10)
        }
      ]);

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});

  }
};
