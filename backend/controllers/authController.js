const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Utility to create a signed JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '7d',
  });
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
exports.register = async (req, res) => {
  const {
    username,
    first_name,
    last_name,
    password,
    primary_email,
    secondary_email,
    phone_number,
    image,
    date_of_birth,
  } = req.body;

  try {
    const existingUser = await User.findOne({ primary_email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const newUser = new User({
      username,
      first_name,
      last_name,
      password,
      primary_email,
      secondary_email,
      phone_number,
      image,
      date_of_birth,
    });

    const user = await newUser.save();

    res.status(201).json({
      _id: user._id,
      username: user.username,
      primary_email: user.primary_email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @route   POST /api/auth/login
// @desc    Log in existing user
// @access  Public
exports.login = async (req, res) => {
  const { primary_email, password } = req.body;

  try {
    const user = await User.findOne({ primary_email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
      _id: user._id,
      username: user.username,
      primary_email: user.primary_email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
