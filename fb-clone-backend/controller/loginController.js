import signup from "../model/loginModel.js";

export const getUserData = async (req, res) => {
  try {
    const signUp = await signup.find();
    res.status(200).json(signUp);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const signupData = async (req, res) => {
  const data = req.body;
  const newSignup = new signup(data);
  try {
    await newSignup.save();
    res.status(201).json(newSignup);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  console.log(req.body.email);
  const { username, password } = req.body;
  signup.findOne({ email: username }, (err, user) => {
    console.log(user);
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send({ message: "not register" });
    }
  });
};
