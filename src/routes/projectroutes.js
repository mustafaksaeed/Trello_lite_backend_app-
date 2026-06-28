import express from "express";
import {
  createProject,
  showProjects,
  showProject,
  deleteProject,
} from "../controllers/projectcontrollers.js";

const router = express.Router();

router.post("/createproject", createProject);

router.get("/", showProjects);

router.get("/:id", showProject);

router.delete("/:id", deleteProject);

export default router;
