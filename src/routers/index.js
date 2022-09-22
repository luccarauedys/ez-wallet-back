import { Router } from "express";

import authRouter from "./auth.router.js";
import usersRouter from "./users.router.js";
import transactionsRouter from "./transactions.router.js";

const appRouter = Router();

appRouter.use("/api/auth", authRouter);
appRouter.use("/api/users", usersRouter);
appRouter.use("/api/transactions", transactionsRouter);

export default appRouter;
