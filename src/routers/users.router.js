import { Router } from "express";

import { getUser } from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/", getUser);

export default usersRouter;
