import Comment from '../models/comment.model.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const getPostComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ pin: postId })
      .populate('user', 'username img displayName')
      .sort({
        createdAt: -1,
      });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const addComment = async (req, res) => {
  const { description, pin } = req.body;

  const token = req.cookies.token;

  
  const comment = await Comment({ description, pin, user: payload.userId });

};
