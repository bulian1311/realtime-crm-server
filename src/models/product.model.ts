import { Model, DataTypes } from "sequelize";
import { generalConnection } from "#root/db/connections";

class Product extends Model {
  public id!: number;
  public title!: string;
  public url!: string;
  public price!: number;
  public description!: string;

  // public getCategory!: HasManyGetAssociationsMixin<Category>;
  // public addCategory!: HasManyAddAssociationMixin<Category, number>;
  // public hasCategory!: HasManyHasAssociationMixin<Category, number>;
  // public countCategory!: HasManyCountAssociationsMixin;
  // public createCategory!: HasManyCreateAssociationMixin<Category>;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "products",
    sequelize: generalConnection,
  }
);

export default Product;
