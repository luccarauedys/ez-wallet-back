import { Router } from "express";

import {
  insertOne,
  getMany,
  // updateOne,
  // deleteOne,
} from "../controllers/transactions.controller.js";

import { validateToken } from "../middlewares/token.middleware.js";

const transactionsRouter = Router();
transactionsRouter.use(validateToken);

transactionsRouter.get("/", getMany);
transactionsRouter.post("/", insertOne);
// transactionsRouter.put("/:id", updateOne);
// transactionsRouter.delete("/:id", deleteOne);

export default transactionsRouter;
