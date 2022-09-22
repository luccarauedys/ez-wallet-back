import * as transactionsService from "../services/transactions.service.js";

export async function getMany(req, res) {
  const { userId } = res.locals;

  const transactions = await transactionsService.getMany(userId);
  return res.status(200).send(transactions);
}

export async function insertOne(req, res) {
  const { userId } = res.locals;
  const transactionData = req.body;

  await transactionsService.insertOne(transactionData, userId);
  return res.sendStatus(201);
}

export async function deleteOne(req, res) {
  const { userId } = res.locals;
  const { transactionId } = req.params;

  await transactionsService.deleteOne(userId, transactionId);
  return res.sendStatus(200);
}
