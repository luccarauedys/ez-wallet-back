import { validateSchema } from "../utils/schemaValidation.js";
import { transactionSchema } from "../schemas/index.js";

import { createConnection, closeConnection } from "../database/mongodb.js";

export async function getMany(userId) {
  const db = await createConnection();
  const transactions = await db.collection("transactions").find({ userId }).toArray();
  await closeConnection();
  return transactions;
}

export async function insertOne(transactionData) {
  validateSchema(transactionSchema, transactionData);
  const db = await createConnection();
  await db.collection("transactions").insertOne(transactionData);
  await closeConnection();
}
