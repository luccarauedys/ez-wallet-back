import * as transactionsService from "../services/transactions.service.js";

export async function insertOne(req, res) {
  const { userId } = res.locals;
  const transactionData = req.body;
  await transactionsService.insertOne({ ...transactionData, userId });
  return res.sendStatus(201);
}
