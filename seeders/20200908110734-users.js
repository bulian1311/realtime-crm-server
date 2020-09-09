"use strict";
const crypto = require("crypto");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = "12345";
    const salt = crypto.randomBytes(128).toString("base64");
    const passwordHash = crypto
      .pbkdf2Sync(password, salt, 1, 128, "sha1")
      .toString("hex");

    await queryInterface.bulkInsert(
      "users",
      [
        {
          login: "admin",
          passwordHash: passwordHash,
          salt: salt,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
