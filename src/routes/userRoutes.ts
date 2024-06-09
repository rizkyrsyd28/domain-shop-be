import { Router } from "express";
import { getUserProfile } from "../controllers/userController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

router.get("/profile", authenticateToken, getUserProfile);

export default router;
