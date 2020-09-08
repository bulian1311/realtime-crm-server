import {
  Model,
  DataTypes,
  Association,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from "sequelize";

import { adminConnection } from "#root/db/connections";
import Column from "./column.model";

class User extends Model {
  public id!: number;
  public login!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  public getColumns!: HasManyGetAssociationsMixin<Column>;
  public addColumn!: HasManyAddAssociationMixin<Column, number>;
  public hasColumn!: HasManyHasAssociationMixin<Column, number>;
  public countColumns!: HasManyCountAssociationsMixin;
  public createColumn!: HasManyCreateAssociationMixin<Column>;

  public readonly columns?: Column[];

  public static associations: {
    columns: Association<User, Column>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
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
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "products",
    sequelize: adminConnection,
  }
);

User.hasMany(Column, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "columns",
});

export default User;
