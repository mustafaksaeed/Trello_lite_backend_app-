import express from "../../app.js";
import createProject from "../routes/project.routes.js";

const router = express.Router();

router.post("/createproject", createProject);



export default router;
