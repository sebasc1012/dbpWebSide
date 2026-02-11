import { Pool } from "pg";

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: "1234",
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
