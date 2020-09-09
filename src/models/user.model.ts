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
import crypto from "crypto";

import { adminConnection } from "#root/db/connections";
import Column from "./column.model";

class User extends Model {
  public id!: number;
  public login!: string;
  public passwordHash!: string;
  public salt!: string;

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

  public async generatePassword(password: string) {
    this.salt = crypto.randomBytes(128).toString("base64");
    this.passwordHash = crypto
      .pbkdf2Sync(password, this.salt, 1, 128, "sha1")
      .toString("hex");
  }

  public async checkPassword(password: string) {
    if (!password) return false;
    if (!this.passwordHash) return false;
    return (
      crypto.pbkdf2Sync(password, this.salt, 1, 128, "sha1").toString("hex") ===
      this.passwordHash
    );
  }
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
    passwordHash: {
      type: DataTypes.STRING,
    },
    salt: {
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
    tableName: "users",
    sequelize: adminConnection,
  }
);

User.hasMany(Column, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "columns",
});

export default User;
