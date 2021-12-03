import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoutes from "./routes/loginRoutes.js";
import userPostRoutes from "./routes/userPostRoutes.js";

const app = express();
app.use(express.json());
express.urlencoded({ extended: false });
app.use(cors());

app.use("/fb", loginRoutes);
app.use("/fb", userPostRoutes);

const MONGO_URI =
  "mongodb+srv://rashmi18:rashmi18@cluster0.qxfnr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = 5000;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`server running on port ${port} `))
  )
  .catch((error) => {
    console.log(error.message);
  });
