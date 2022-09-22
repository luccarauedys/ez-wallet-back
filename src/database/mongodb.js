import { MongoClient } from "mongodb";

export const mongoClient = new MongoClient(process.env.MONGO_URI);

export async function createConnection() {
  await mongoClient.connect();
  return mongoClient.db("ezwallet");
}

export async function closeConnection() {
  return await mongoClient.close();
}
