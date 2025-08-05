import Pin from '../models/pin.model.js';

export const getPins = async (req, res) => {
  const pins = await Pin.find().limit(21).skip(21);

  res.status(200).json(pins);
};
