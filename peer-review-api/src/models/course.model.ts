import { DataTypes, Model } from "sequelize";
import sequelizeConfig from "../configs/database.js";
import { CourseAttributeType, CourseType } from "../types/course.type.js";

class CourseModel extends Model<CourseType, CourseAttributeType> {
  static associateToReview(models: any) {
    CourseModel.hasMany(models.Review, {
      foreignKey: "courseId",
      onDelete: "CASCADE",
      onUpdate: "STRICT",
      as: "reviews",
    });
  }
}

CourseModel.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    tag: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: sequelizeConfig,
    modelName: "Course",
    tableName: "courses",
    timestamps: true,
  }
);

export default CourseModel;
