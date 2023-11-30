import { Router } from "express";
import likeController from "../../controller/likes/like.js";

const likeRouter = Router();

likeRouter.post("/likePost", likeController.create);

export default likeRouter;
