import { createPool } from "mysql2";
import "dotenv/config";

let connection = createPool({
    Host: process.env.Host,
    userDb: process.env.userbD,
    password: process.env.password,
    DbName: process.env.DbName,
    multipleStatements: true,
    connectionLimit: 50,
  });
connection.on("connection", (pool) => {
  if (!pool)
    throw new Error(
      "Could not connect to the database , please try again later "
    );
});
export { connection };