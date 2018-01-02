'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rowers', [
      {
        firstname: 'Bram',
        lastname: 'Everts',

      },
      {
        firstname: 'Kees',
        lastname: 'Klaasen',

      },
      {
        firstname: 'Maria',
        lastname: 'Doelen',

      },
      {
        firstname: 'Kim',
        lastname: 'Goossens',

      },
      {
        firstname: 'John',
        lastname: 'Doe',

      },
      {
        firstname: 'Dave',
        lastname: 'Greer',

      },
      {
        firstname: 'Kimberly',
        lastname: 'Stevens',

      },
      {
        firstname: 'Cindy',
        lastname: 'Crawfort',

      },
      {
        firstname: 'Amaya',
        lastname: 'Al Madani',

      },
      {
        firstname: 'Azadeh',
        lastname: 'Salehi',

      },
      {
        firstname: 'Kamran',
        lastname: 'Pashaei',

      },
      {
        firstname: 'Vahid',
        lastname: 'Javadi',

      },
      {
        firstname: 'Trystan',
        lastname: 'Santos',

      },
      {
        firstname: 'Makaila',
        lastname: 'McKinney',

      },
      {
        firstname: 'Carson',
        lastname: 'Thomas',

      },
      {
        firstname: 'Azul',
        lastname: 'Lucero',

      },
      {
        firstname: 'Kayden',
        lastname: 'Weeks',

      },
      {
        firstname: 'Jessie',
        lastname: 'Watts',

      }]);
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rowers', null, {});
  }
};
