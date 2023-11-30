import { Router } from "express";
import postController from "../../controller/post/post.js";

const postRouter = Router();

postRouter.post("/post", postController.create);

export default postRouter;
