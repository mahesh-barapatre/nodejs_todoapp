import express from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthanticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthanticated, newTask);

router.post("/my", isAuthanticated, getMyTask);
router
    .route("/:id")
    .put( isAuthanticated, updateTask)
    .delete(isAuthanticated, deleteTask);
    


export default router;