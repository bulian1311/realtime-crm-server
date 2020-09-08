import { Sequelize } from "sequelize";

export const generalConnection = new Sequelize({
  dialect: "sqlite",
  storage: "./_sqlite/dev.general.sqlite",
  logging: false,
});

export const adminConnection = new Sequelize({
  dialect: "sqlite",
  storage: "./_sqlite/dev.admin.sqlite",
  logging: false,
});
