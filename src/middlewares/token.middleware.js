import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer", "").trim();

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) throw { status: 401, message: "Token inválido!" };
    if (decoded) res.locals.userId = decoded.id;
  });

  next();
};
