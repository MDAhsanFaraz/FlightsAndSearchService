"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Visakhapatnam International Airport",
          cityId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lokpriya Gopinath Bordoloi International Airport",
          cityId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gaya International Airport",
          cityId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indra Ghandhi International Airport",
          cityId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sardar Vallabhbhai Patel International Airport",
          cityId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kempegowda International Airport",
          cityId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mangalore International Airport",
          cityId: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chhatrapati Shivaji International Airport",
          cityId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Netaji Subhash Chandra Bose International Airport",
          cityId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rajiv Gandhi International Airport",
          cityId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
