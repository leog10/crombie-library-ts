import express from 'express';
import { login, signup } from '../controllers/auth';

const authRouter = express.Router();

authRouter.post('/auth/signup', signup);
authRouter.post('/auth/login', login);

export default authRouter;
