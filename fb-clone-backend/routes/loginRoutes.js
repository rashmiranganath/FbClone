import express from "express";
import {
  getUserData,
  signupData,
  login,
} from "../controller/loginController.js";

const router = express.Router();

router.get("/", getUserData);

router.post("/signup", signupData);

router.post("/login", login);

export default router;
