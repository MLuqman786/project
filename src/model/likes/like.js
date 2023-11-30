import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/user.js";


const likeModel = sequelize.define("like", {
  userLike: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

userModel.hasMany(likeModel);
likeModel.belongsTo(userModel);

export default likeModel;
