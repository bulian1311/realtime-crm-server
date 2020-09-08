"use strict";

module.exports.up = (qeryInterface, DataTypes) => {
  return qeryInterface.createTable(
    "tasks",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      columnId: {
        allowNull: false,
        references: {
          key: "id",
          model: {
            tableName: "columns",
          },
        },
        type: DataTypes.INTEGER.UNSIGNED,
        onDelete: "CASCADE",
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
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

module.exports.down = (qeryInterface) => qeryInterface.dropTable("tasks");
