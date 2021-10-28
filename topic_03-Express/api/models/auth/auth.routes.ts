import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/register", AuthController.registerNewUser);
router.post("/login", AuthController.loginUser);
router.post("/logout", AuthController.logoutUser);
router.get("/current", AuthController.getCurrentUser);

export default router;
