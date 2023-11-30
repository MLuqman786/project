import { Router } from "express";
import followerController from "../../controller/follower/follower.js";

const followerRouter = Router();

followerRouter.post("/followerPost", followerController.create);

export default followerRouter;
