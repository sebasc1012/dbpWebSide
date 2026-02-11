import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "node_app_db",
  port: 5432,
});
