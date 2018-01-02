'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TrainingShips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boat_number: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ShipId: {
        type: Sequelize.INTEGER,
        references: { model: 'Ships', key: 'id' }
      },
      TrainingId: {
        type: Sequelize.INTEGER,
        references: { model: 'Trainings', key: 'id' }
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TrainingShips');
  }
};
