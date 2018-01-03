'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rowers', [
      {
        firstname: 'Bram',
        lastname: 'Everts',
        UserId: 1
      },
      {
        firstname: 'Kees',
        lastname: 'Klaasen',
        UserId: 1
      },
      {
        firstname: 'Maria',
        lastname: 'Doelen',
        UserId: 1
      },
      {
        firstname: 'Kim',
        lastname: 'Goossens',
        UserId: 1
      },
      {
        firstname: 'John',
        lastname: 'Doe',
        UserId: 2
      },
      {
        firstname: 'Dave',
        lastname: 'Greer',
        UserId: 2
      },
      {
        firstname: 'Kimberly',
        lastname: 'Stevens',
        UserId: 2
      },
      {
        firstname: 'Cindy',
        lastname: 'Crawfort',
        UserId: 2
      },
      {
        firstname: 'Amaya',
        lastname: 'Al Madani',
        UserId: 3
      },
      {
        firstname: 'Azadeh',
        lastname: 'Salehi',
        UserId: 3
      },
      {
        firstname: 'Kamran',
        lastname: 'Pashaei',
        UserId: 3
      },
      {
        firstname: 'Vahid',
        lastname: 'Javadi',
        UserId: 3
      },
      {
        firstname: 'Trystan',
        lastname: 'Santos',
        UserId: 1
      },
      {
        firstname: 'Makaila',
        lastname: 'McKinney',
        UserId: 2
      },
      {
        firstname: 'Carson',
        lastname: 'Thomas',
        UserId: 3
      },
      {
        firstname: 'Azul',
        lastname: 'Lucero',
        UserId: 1
      },
      {
        firstname: 'Kayden',
        lastname: 'Weeks',
        UserId: 2
      },
      {
        firstname: 'Jessie',
        lastname: 'Watts',
        UserId: 3
      }]);
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rowers', null, {});
  }
};
