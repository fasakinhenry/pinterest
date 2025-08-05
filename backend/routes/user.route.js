import express from 'express';
import { test } from '../controllers/user.controller.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/create', async (req, res) => {
  const userInformation = req.body;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await User.create({
    displayName: userInformation.displayName,
    username: userInformation.username,
    email: userInformation.email,
    hashedPassword: hashedPassword,
  });
  return res.json(userInformation);
});

router.get('/fetch', async (req, res) => {
  const users = await User.find();
  return res.json(users);
});

router.get('/test', test);

export default router;
