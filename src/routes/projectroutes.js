import express from "express";
import {
  createProject,
  showProjects,
  showProject,
  deleteProject,
  updateProject,
} from "../controllers/projectcontrollers.js";

const router = express.Router();

router.post("/createproject", createProject);

router.get("/", showProjects);

router.get("/:id", showProject);

router.delete("/:id", deleteProject);

router.put("/:id", updateProject);

export default router;
