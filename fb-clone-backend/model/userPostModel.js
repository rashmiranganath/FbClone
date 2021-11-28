import mongoose from "mongoose";

const userPost = mongoose.Schema({
  postMessage: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

const newUserPost = mongoose.model("userPost", userPost);

export default newUserPost;
