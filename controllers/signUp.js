const user = require("../models/userSchema");

exports.signUp = async(req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "Fill all fields",
      });
    }
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    const newUser = await user.create({ username, email, password });
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
  }
};
