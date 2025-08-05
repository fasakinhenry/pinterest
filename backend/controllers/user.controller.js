import User from '../models/user.model.js';

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
