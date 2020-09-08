import {
  Model,
  DataTypes,
  Association,
  Optional,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from "sequelize";

import { adminConnection } from "#root/db/connections";
import Task from "./task.model";
import User from "./user.model";

interface ColumnAttributes {
  id: number;
  userId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

interface ColumnCreationAttributes extends Optional<ColumnAttributes, "id"> {}

class Column extends Model<ColumnAttributes, ColumnCreationAttributes> {
  public id!: number;
  public userId!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  public getTasks!: HasManyGetAssociationsMixin<Task>;
  public addTask!: HasManyAddAssociationMixin<Task, number>;
  public hasTask!: HasManyHasAssociationMixin<Task, number>;
  public countTasks!: HasManyCountAssociationsMixin;
  public createTask!: HasManyCreateAssociationMixin<Task>;

  public readonly tasks?: Task[];

  public static associations: {
    tasks: Association<Column, Task>;
  };
}

Column.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
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
    tableName: "columns",
    sequelize: adminConnection,
  }
);

Column.hasMany(Task, {
  sourceKey: "id",
  foreignKey: "columnId",
  as: "tasks",
});

export default Column;
