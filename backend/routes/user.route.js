import express from 'express';
import { test } from '../controllers/user.controller.js';
import User from '../models/user.model.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  const userInformation = req.body;
  await User.create({
    displayName: userInformation.displayName,
    userName: userInformation.userName,
    email: userInformation.email,
    hashedPassword: userInformation.hashedPassword,
  });
  return res.json(userInformation);
});

router.get('/test', test);

export default router;
