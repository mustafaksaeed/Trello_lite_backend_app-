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

export const showProjects = async () => {
  const row = await db.query("SELECT * FROM projects");

  console.log(row.rows[0]);
};

export const showProject = async (req) => {
  const projectid = parseInt(req.params.id);
  const row = await db.query("SELECT * FROM projects WHERE projects_id= $1", [
    projectid,
  ]);

  console.log(row.rows[0]);
};

export const deleteProject = async (req, res) => {
  const projectid = parseInt(req.params.id);
  await db.query("DELETE FROM projects WHERE projects_id= $1", [projectid]);

  res.status(201).send({
    message: "project successfully deleted",
  });
};

export const updateProject = async (req, res) => {
  const projectid = parseInt(req.params.id);
  const { name, description } = req.body;
  await db.query(
    "UPDATE projects SET name = $1, description = $2 WHERE projects_id= $3",
    [name, description, projectid],
  );

  res.status(201).send({
    message: "project successfully updated",
  });
};
