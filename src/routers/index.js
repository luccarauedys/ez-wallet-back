import { Router } from "express";

import authRouter from "./auth.router.js";
import transactionsRouter from "./transactions.router.js";
// import usersRouter from "./users.router.js";

const appRouter = Router();

appRouter.use("/api/auth", authRouter);
appRouter.use("/api/transactions", transactionsRouter);
// appRouter.use("/api/users", usersRouter);

export default appRouter;
