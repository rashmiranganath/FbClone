import newUserPost from "../model/userPostModel.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

export const postUserUploads = async (req, res) => {
  upload.single("img");
  console.log(req.body, req.files);
  const data = {
    postMessage: req.body.postMessage,
    img: req.file,
  };
  const post = new newUserPost(data);
  post
    .save()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};
