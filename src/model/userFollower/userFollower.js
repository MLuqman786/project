import { DataTypes } from "sequelize";
import sequelize from "../../../db/config.js";
import userModel from "../user/user.js";
import followerModel from "../follower/follower.js";

const userFollowerModel = sequelize.define("userFollower", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: userModel,
      key: "id",
    },
  },
  followerId: {
    type: DataTypes.INTEGER,
    references: {
      model: followerModel,
      key: "id",
    },
  },
});

userModel.belongsToMany(followerModel, { through: userFollowerModel });
followerModel.belongsToMany(userModel, { through: userFollowerModel });

export default userFollowerModel;
