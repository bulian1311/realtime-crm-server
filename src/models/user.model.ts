import { Model, DataTypes } from "sequelize";
import { adminConnection } from "#root/db/connections";

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
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "products",
    sequelize: adminConnection,
  }
);

export default User;
