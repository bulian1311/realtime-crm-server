import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./_db/general.sqlite",
});

export default sequelize;
