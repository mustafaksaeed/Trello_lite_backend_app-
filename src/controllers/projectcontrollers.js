import { db } from "../database/db.js";

export const createProject = async (req, res) => {
  const { name, description } = req.body;

  await db.query("INSERT INTO projects (name,description) VALUES ($1,$2)", [
    name,
    description,
  ]);

  res.status(201).send({
    message: "project successfully created",
  });
};

export const showProjects = async (req, res) => {
  console.log("projects");
};
