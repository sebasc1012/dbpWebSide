import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function validation(token) {
  try {
    return jwt.verify(token, process.env.JWT_TOKEN);
  } catch (error) {
    console.log(error);
  }
}

export async function createToken(user_id) {
  return jwt.sign({ id: user_id }, process.env.JWT_TOKEN, { expiresIn: "1d" });
}
