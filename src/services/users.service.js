import { createConnection, closeConnection } from "../database/mongodb.js";

export async function getUser(userId) {
  const db = await createConnection();

  const user = await db.collection("users").findOne({ userId }).toArray();

  delete user[0].password;

  closeConnection();

  return user;
}
