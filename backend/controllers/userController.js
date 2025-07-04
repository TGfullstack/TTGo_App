const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser= async (req, res) => {
  try {
    const { first_name, last_name, username, primary_email, secondary_email, phone_number, date_of_birth, image, password} = req.body;
    const newUser = new User({
      first_name,
      last_name,
      username,
      primary_email,
      secondary_email,
      phone_number,
      image,
      date_of_birth,
      password 
    });
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

exports.getUsers = async (req, res ) => {
  try {
    const users = await User.find().populate("projects");
    if (!users) return res.status(404).json(users)
    res.status(200).json({
      Success: "Successful fetch",
      users});
  } catch (err) {
    res.status(500).json({ error: err})
  }
};
exports.getUserById = async (req, res ) => {
  try {
    const user = await User.findById(req.params.id).populate("projects");
    if (!user) return res.status(404).json(user)
    // const users = await User.find().populate("projects");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err})
  }
};

exports.updateUser = async(req, res ) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true});
    if (!updatedUser) return res.status(404).json(updatedUser)

    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({ error: 'Error updating user'})
  }
};

exports.deleteUser = async(req, res ) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id, req.body, { new: true});
    if (!user) return res.status(404).json('User not found.')
    res.json({ message: 'User deleted'});
  } catch (error) {
    res.status(400).json({ error: `Error deleting user with ID: $`,})
  }
};

// exports.createUser = async (req, res ) => {
//   try {
//     const { username, first_name, last_name, primary_email, secondary_email, date_of_birth, phone_number, image, password } = req.body;
//     const userExist = await User.findOne({primary_email});
//     if (userExist)return res.status(400).json('Email already used')
//     const newUser = await User.create({
//       username,
//       first_name,
//       last_name,
//       image,
//       primary_email,
//       secondary_email,
//       date_of_birth,
//       phone_number,
//       password
//     });
  
//     res.status(201).json({
//       Data: [{
//         Status: 201,
//         message: 'User successfully created',
//         newUser

//       }]
//     });
//   } catch (err) {
//     res.status(500).json({ error: 'Server Error',})
//   }
// };

// exports.loginUser = async (req, res) => {
//   try {
//     const { primary_email, password } = req.body;
//     const user = await User.findOne({ primary_email });

//     if (!user ) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const isMatch = await user.comparePassword(password)
//     if ( !isMatch ) {
//       return res.status(400).json({ error: "Invalid credentials: email or password." });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_EXPIRE });
//     res.status(200).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message, message: err.message });
//   }
// };
