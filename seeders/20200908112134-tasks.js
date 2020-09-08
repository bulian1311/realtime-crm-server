"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          columnId: 1,
          name: "Test task 1",
          description: "111 Test task Test task Test task",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          columnId: 1,
          name: "Test task 2",
          description: "222 Test task Test task Test task",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          columnId: 1,
          name: "Test task 3",
          description: "333 Test task Test task Test task",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
