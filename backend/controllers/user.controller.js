import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
  const {username, displayName, email, password} = req.body;

  if (!username || !displayName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newHashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    displayName,
    email,
    hashedPassword: newHashedPassword,
  });

  const {hashedPassword, ...detailsWithoutPassword} = user.toObject();
  res.status(201).json(detailsWithoutPassword);
};

export const loginUser = async (req, res) => {
  
};
export const logoutUser = async (req, res) => {
  
};

export const getUser = async (req, res) => {
  const {username} = req.params;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const {hashedPassword, ...detailsWithoutPassword} = user.toObject();
    res.status(200).json(detailsWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
