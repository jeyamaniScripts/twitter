const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");
const generateToken = require("../utils/generateToken");
const errorHandler = require("../utils/errorHandler");

const signup = async (req, res) => {
  try {
    const { userName, fullName, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all fields are provided
    if (!userName || !fullName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // if (emailRegex.test(email)) {
    //   return res.status(400).json({ error: "Invalid Email Format" });
    //   // errorHandler(500, "Invalid Email Format");
    // }

    const existingEmail = await User.findOne({ email });
    const existingUserName = await User.findOne({ userName });

    if (existingEmail || existingUserName) {
      return res
        .status(400)
        .json({ error: "Already existing Username or Email" });
    }

    // Validate password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(200).json({ message: "User created successfully" });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      // return res.status(400).json({ message: "All Fileds are required" });
      return next(errorHandler(400, "All filed required"));
    }

    const user = await User.findOne({ email });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid email or Password" });
    }
    const userId = user._id;
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    console.log(userId, token);

    res
      .status(200)
      .cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
      })
      .json({ message: "cookie created successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, signin };
