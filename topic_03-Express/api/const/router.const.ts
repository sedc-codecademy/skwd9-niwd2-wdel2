import { Router } from "express";
const router = Router();

import todosRoutes from "../models/todos/todos.routes";
import authRoutes from "../models/auth/auth.routes";

router.use("/todos", todosRoutes);
router.use("/auth", authRoutes);

export default router;