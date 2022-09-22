import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { validateSchema } from "../utils/schemaValidation.js";
import { signUpSchema } from "../schemas/index.js";

import { createConnection, closeConnection } from "../database/mongodb.js";

export async function signUp(userData) {
  const { name, email, password } = userData;

  validateSchema(signUpSchema, userData);

  await checkIfUserExists(email, "sign up");

  const db = await createConnection();

  await db
    .collection("users")
    .insertOne({ name, email, password: bcrypt.hashSync(password, 10) });

  await closeConnection();
}

export async function signIn(userData) {
  const { email, password } = userData;

  const user = await checkIfUserExists(email, "sign in");

  if (!bcrypt.compareSync(password, user.password))
    throw { status: 401, message: "Credenciais inválidas!" };

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  return token;
}

export const checkIfUserExists = async (email, action) => {
  const db = await createConnection();
  const user = await db.collection("users").findOne({ email });
  await closeConnection();

  if (action === "sign up" && user)
    throw { status: 409, message: "Esse usuário já está cadastrado!" };

  if (action === "sign in" && !user)
    throw { status: 404, message: "Esse usuário não existe. Crie uma conta!" };

  if (user) return user;
};
