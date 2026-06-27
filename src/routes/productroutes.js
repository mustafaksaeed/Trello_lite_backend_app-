import express from "express";
import {
  createProject,
  showProjects,
} from "../controllers/projectcontrollers.js";

const router = express.Router();

router.post("/createproject", createProject);

router.get("/", showProjects);



export default router;
