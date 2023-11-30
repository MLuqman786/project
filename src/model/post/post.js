import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/user.js";

const postModel = sequelize.define("post", {
  userPost: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

userModel.hasMany(postModel);
postModel.belongsTo(userModel);

export default postModel;
