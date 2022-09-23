import { ObjectId } from "mongodb";
import { createConnection, closeConnection } from "../database/mongodb.js";

import { validateSchema } from "../utils/schemaValidation.js";
import { transactionSchema } from "../schemas/index.js";

export async function getMany(userId) {
  const db = await createConnection();
  const transactions = await db.collection("transactions").find({ userId }).toArray();

  closeConnection();

  return transactions;
}

export async function insertOne(transactionData, userId) {
  validateSchema(transactionSchema, transactionData);

  const db = await createConnection();
  await db.collection("transactions").insertOne({ ...transactionData, userId });

  closeConnection();
}

export async function deleteOne(userId, transactionId) {
  const db = await createConnection();

  const transaction = await db
    .collection("transactions")
    .findOne({ _id: new ObjectId(transactionId), userId });

  if (transaction)
    await db.collection("transactions").deleteOne({ _id: new ObjectId(transactionId) });

  closeConnection();
}
