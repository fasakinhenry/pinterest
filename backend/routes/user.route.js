import express from 'express';
import { test } from '../controllers/user.controller';

const router = express.Router();

router.get("/users", test);

export default router;
