import mongoose from "mongoose";

const signUpSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  dob: String,
  gender: String,
});

const signup = mongoose.model("signup", signUpSchema);

export default signup;
