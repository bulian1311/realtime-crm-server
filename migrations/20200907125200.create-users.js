"use strict";

module.exports.up = (qeryInterface, DataTypes) => {
  return qeryInterface.createTable(
    "users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      login: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      passwordHash: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      salt: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = (qeryInterface) => qeryInterface.dropTable("users");
