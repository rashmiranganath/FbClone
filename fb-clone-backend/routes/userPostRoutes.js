import express from "express";
import { postUserUploads } from "../controller/userPostController.js";

console.log("routes");
const router = express.Router();

router.post("/home/uploadImg", postUserUploads);

export default router;
