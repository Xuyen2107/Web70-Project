import "dotenv/config";
import express from "express";
import { connectToDatabase } from "./configs/db.config.js";

const app = express();
const PORT = 3001;

app.use(express.json());

connectToDatabase();

app.use("/api/v1/me", (req, res) => {
   res.json({
      message: "Welcome",
   });
});

app.listen(PORT, () => {
   console.log(`Server is running at ${PORT}`);
});
