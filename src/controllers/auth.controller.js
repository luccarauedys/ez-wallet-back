import * as authService from "../services/auth.service.js";

export async function signUp(req, res) {
  const signUpData = req.body;
  await authService.signUp(signUpData);
  return res.sendStatus(201);
}

export async function signIn(req, res) {
  const signInData = req.body;
  const token = await authService.signIn(signInData);
  return res.status(200).send({ token });
}
