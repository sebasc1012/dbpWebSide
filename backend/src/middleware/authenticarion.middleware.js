import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { pool } from "../database";
import { validation } from "../utils/token";
dotenv.config();

export default async function authentication(req, res, next) {
  const bearer = req.header("x-auth-token");

  if (!bearer) {
    return res.status(401).json({ error: "unauthorize" });
  }

  const acces_token = bearer.split("Bearer ")[1].trim();

  const verified = validation(acces_token);
  if (!verified) {
    return res.status(401).json({ error: "unauthorize" });
  }

  const [result] = await pool.query("SELECT * FROM users WHERE user_id = ?", [
    verified.id,
  ]);
  if (result.affectedRows <= 0) {
    return res.status(401).json({ error: "unauthorize" });
  }
  req.user = result[0];
  next();
}
