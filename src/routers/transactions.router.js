import { Router } from "express";

import { insertOne, getMany, deleteOne } from "../controllers/transactions.controller.js";

import { validateToken } from "../middlewares/token.middleware.js";

const transactionsRouter = Router();
transactionsRouter.use(validateToken);

transactionsRouter.get("/", getMany);
transactionsRouter.post("/", insertOne);
transactionsRouter.delete("/:transactionId", deleteOne);

export default transactionsRouter;
