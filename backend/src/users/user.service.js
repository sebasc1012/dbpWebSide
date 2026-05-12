import { pool } from "../database/index.js";

export const getAllUsers = async () => {
  const [result] = await pool.query("SELECT * FROM users");
  return result;
};

export const createUser = async (
  name,
  lastName,
  email,
  password,
  description
) => {
  const [result] = await pool.query(
    "INSERT INTO users (user_name, user_last_name, email, password, description) VALUES (?, ?, ?, ?, ?)",
    [name, lastName, email, password, description]
  );
  const [rows] = await pool.query("SELECT * FROM users WHERE user_id = ?", [
    result.insertId,
  ]);

  return rows[0];
};

export const getUser = async (id) => {
  const [result] = await pool.query("SELECT * FROM users WHERE user_id = ?", [
    id,
  ]);
  return result[0];
};

export const loginUser = async (email, password) => {
  const [result] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return result[0];
};
