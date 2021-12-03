import express from "express";
import { postUserUploads } from "../controller/userPostController.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

console.log("routes");
const upload = multer({ storage });

router.post("/home/uploadImg", upload.single("img"), postUserUploads);

export default router;
