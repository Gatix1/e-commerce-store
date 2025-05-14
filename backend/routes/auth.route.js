import express from "express";
import { signup, login, logout, refreshToken, getProfile } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/refresh-token", refreshToken);

router.get("/profile", /*TODO: protectRoute,*/ getProfile)

export default router;