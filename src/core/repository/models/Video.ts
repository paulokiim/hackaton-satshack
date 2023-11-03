import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../../config/db";
import Module from "./Module";

type VideoAttributes = {
  uid: string;
  filename: string;
  ownerAddress: string;
  name?: string;
  slug?: string;
  price?: number;
  pricePerMinute?: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export interface VideoInput
  extends Optional<VideoAttributes, "uid" | "ownerAddress"> {}
export interface VideoOutput extends Required<VideoAttributes> {}

class Video
  extends Model<VideoAttributes, VideoInput>
  implements VideoAttributes
{
  public uid!: string;
  public filename!: string;
  public ownerAddress!: string;
  public moduleUid!: string;
  public name!: string;
  public price!: number;
  public pricePerMinute!: number;
  public slug!: string;
  public description!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Video.init(
  {
    uid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER.UNSIGNED,
    },
    pricePerMinute: {
      type: DataTypes.NUMBER.UNSIGNED,
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

Module.hasMany(Video, {
  sourceKey: "uid",
  foreignKey: "moduleUid",
  as: "videos",
});

Video.belongsTo(Module, {
  targetKey: "uid",
  as: "module",
});

export default Video;
