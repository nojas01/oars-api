'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return
     queryInterface.addColumn('Rowers',
        'UserId',
        {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          allowNull: False,
          references: { model: 'Users', key: 'id'}
        })
      }


  down: (queryInterface, Sequelize) => {
    return
      queryInterface.deleteColumn('Rowers', 'UserId')
  }
};
