import likeModel from "../model/likes/like.js";
import postModel from "../model/post/post.js";
import userModel from "../model/user/user.js";

const dbInit = async () => {
  await userModel.sync({
    alter: true,
    force: false,
  });
  await postModel.sync({
    alter: true,
    force: false,
  });
  await likeModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
