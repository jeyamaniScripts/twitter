const bcrypt = require("bcryptjs");

const User = require("../model/user.model");

const siginup = async (req, res) => {
  try {
    const { userName, fullName, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\@s]+$/;

    // if (emailRegex.test(email)) {
    //   return res.status(400).json({ error: "Invalid Email Format" });
    // }

    // const existingEmail = await User.findOne({ email });
    // const existingUserName = await User.findOne({ userName });

    // if (existingEmail || existingUserName) {
    //   return res
    //     .status(400)
    //     .json({ error: "Already existing Username or Email" });
    // }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "password must have atleast 6 char length" });
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
      await newUser.save();
      res.status(200).json({ message: "User created successfully" });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = siginup;
