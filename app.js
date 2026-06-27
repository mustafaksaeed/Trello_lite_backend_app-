import express from "express";
import dotenv from "dotenv";
import productRoutes from "./src/routes/project.routes.js";

app.use(express.json());
app.use();

dotenv.config();

const app = express();

const port = process.env.port;

app.get("/", (req, res) => {
  res.send("server is working ");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
