import { Router } from "express";
import userRouter from "./user/user.js";
import postRouter from "./post/post.js";
import likeRouter from "./likes/like.js";
import followerController from "../controller/follower/follower.js";
// import commentRouter from "./comments/comments.js";

const allRouter = Router();

allRouter.use("/user", userRouter);
allRouter.use("/post", postRouter);
allRouter.use("/like", likeRouter);
// allRouter.use("/comment", commentRouter);
allRouter.use("/follower", followerController);

export default allRouter;
