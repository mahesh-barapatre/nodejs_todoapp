import express from "express";
import { getMyProfile, regsiter, login, logout, mahesh1 } from "../controllers/user.js";
import { isAuthanticated } from "../middlewares/auth.js";

const router = express.Router();

router.post(("/new"),regsiter);

router.post(("/login"),login);

router.get(("/logout"),logout);

router.get(("/me"), isAuthanticated, getMyProfile);
router.get(("/mahesh"), mahesh1);

export default router;