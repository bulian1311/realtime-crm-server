import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize/admin.sequelize";

class User extends Model {
  public id!: number;
  public login!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "products",
    sequelize: sequelize,
  }
);

export default User;
