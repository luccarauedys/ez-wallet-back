import { Router } from "express";

import { getUser } from "../controllers/users.controller.js";

import { validateToken } from "../middlewares/token.middleware.js";

const usersRouter = Router();
usersRouter.use(validateToken);

usersRouter.get("/", getUser);

export default usersRouter;
