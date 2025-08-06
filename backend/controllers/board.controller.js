import Board from '../models/board.model.js';
import Pin from '../models/pin.model.js';

export const getUserBoards = async (req, res) => {
  const { userId } = req.params;

  const boards = await Board.find({ user: userId });
  const boardWithPinDetails = await Promise.all(
    boards.map(async (board) => {
      const pinCount = await Pin.countDocuments({ board: board._id });
      const firstPin = await Pin.findOne({ board: board._id });
      return { ...board.toObject(), pinCount, firstPin };
    })
  );
  try {
    // Fetch user boards from the database
    return res.status(200).json(boardWithPinDetails);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching user boards' });
  }
};
