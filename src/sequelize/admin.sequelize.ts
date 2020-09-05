import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./_db/admin.sqlite",
});

export default sequelize;
