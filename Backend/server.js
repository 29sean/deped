import express from "express";
import cors from "cors";
import { config } from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import divisionRoutes from "./routes/divisionRoutes.js";

import pool from "./db.js";

config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/divisions", divisionRoutes);

(async () => {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("MySQL Connected");
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
  }
})();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
