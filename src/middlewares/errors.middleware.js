export default async function errorHandler(error, req, res, next) {
  if (error.status && error.message) {
    return res.status(error.status).send(error.message);
  }
  console.log(error);
  return res.sendStatus(500);
}
