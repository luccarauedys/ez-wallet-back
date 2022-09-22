import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { createConnection, closeConnection } from "../database/mongodb.js";

export async function signUp(data) {
  // const { name, email, password } = signUpData;
  // verificar se ja existe o usuario
  // verificar se os dados estao corretos
  // try {
  //   const db = await createConnection();
  //   const user = await db.collection("users").findOne({ email });
  //   if (user) return res.status(409).send("Esse usuário já existe!");
  //   const encryptedPassword = bcrypt.hashSync(password, 10);
  //   await closeConnection();
  // } catch (error) {
  //   console.log(error);
  //   await closeConnection();
  // }
}

export async function signIn(data) {}
