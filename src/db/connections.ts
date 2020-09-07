import { Sequelize } from "sequelize";

export const generalConnection = new Sequelize({
  dialect: "sqlite",
  storage: "./_sqlite/dev.general.sqlite",
});

export const adminConnection = new Sequelize({
  dialect: "sqlite",
  storage: "./_sqlite/dev.admin.sqlite",
});
