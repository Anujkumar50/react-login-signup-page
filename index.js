const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/firstdb")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User saved successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      name: req.body.name,
      password: req.body.password
    });

    if (user) {
      res.send("Login Successful");
    } else {
      res.send("User not found");
    }

  } catch (error) {
    res.status(500).send(error.message);
  }
});




app.listen(4000, () => {
  console.log("Server started on port 4000");
});