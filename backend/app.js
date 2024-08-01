import express from "express";
import { PORT, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";
import path from "path";
import booksRoutes from "./routes/booksRoutes.js";
const app = express();
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(express.static(path.join(__dirname, "/dist")));
app.use("/api/books", booksRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running at: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
