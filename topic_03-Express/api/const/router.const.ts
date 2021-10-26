import { Router } from "express";
const router = Router();

import todosRoutes from "../models/todos/todos.routes";

router.use("/todos", todosRoutes);
// router.use("/auth", authRoutes);

export default router;