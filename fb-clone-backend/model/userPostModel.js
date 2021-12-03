import mongoose from "mongoose";

const userPost = mongoose.Schema({
  postMessage: String,
  img: String,
});

const newUserPost = mongoose.model("userPost", userPost);

export default newUserPost;
