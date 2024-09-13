import { createPool } from "mysql2";
import "dotenv/config";

let connection = createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PWD_DB,
    database: process.env.NAME_DB,
    multipleStatements: true,
    connectionLimit: 150,
  });
connection.on("connection", (pool) => {
  if (!pool)
    throw new Error(
      "Could not connect to the database , please try again later "
    );
});
export { connection };