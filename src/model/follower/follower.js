import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/user.js";

const followerModel = sequelize.define("follower", {
  follower: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

userModel.hasMany(followerModel);
followerModel.belongsTo(userModel);

export default followerModel;
