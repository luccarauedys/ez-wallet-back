import { createConnection, closeConnection } from "../database/mongodb.js";

export async function getUser(userId) {
  const db = await createConnection();

  const user = await db.collection("users").find({ userId }).toArray();

  delete user[0].password;

  await closeConnection();

  return user;
}
