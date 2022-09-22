import * as usersService from "../services/users.service.js";

export async function getUser(req, res) {
  const { userId } = res.locals;
  const userData = await usersService.getUser(userId);
  return res.status(200).send(userData);
}
