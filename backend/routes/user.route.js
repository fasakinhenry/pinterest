import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/create', (req, res) => {
  const userInformation = req.body;
  return res.json(userInformation);
});

router.get('/test', test);

export default router;
