import express from "express";
import { check } from "express-validator";

import { getUserById, signup, login } from "../controllers/users-controller.js";

const router = express.Router();

router.get("/", getUserById);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  signup
);

router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  login
);

export default router;
