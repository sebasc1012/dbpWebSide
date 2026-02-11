import { pool } from "./database/db.js";

async function testConection() {
  try {
    const response = await pool.query("SELECT * FROM users");
    console.log("Conected at:", response.rows);
  } catch (err) {
    console.error(err);
  }
}

testConection();
