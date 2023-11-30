import { Router } from "express";
import userController from "../../controller/user/user.js";

const userRouter = Router();

userRouter.post("/user", userController.create);

export default userRouter;
