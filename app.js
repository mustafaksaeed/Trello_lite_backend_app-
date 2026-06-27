import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/projectroutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/projects", router);
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("server is working ");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
