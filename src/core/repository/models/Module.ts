import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../../config/db";

type ModuleAttributes = {
  uid: string;
  name: string;
  price: number;
  ownerAddress: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export interface ModuleInput extends Optional<ModuleAttributes, "uid"> {}
export interface ModuleOutput extends Required<ModuleAttributes> {}

class Module
  extends Model<ModuleAttributes, ModuleInput>
  implements ModuleAttributes
{
  public uid!: string;
  public name!: string;
  public price!: number;
  public ownerAddress!: string;
  public description!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Module.init(
  {
    uid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER.UNSIGNED,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);

export default Module;
