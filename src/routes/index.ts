import { Router } from 'express';
import authorRouter from './author';
import bookRouter from './book';
import rentRouter from './rental';
import clientRouter from './client';
import authRouter from './auth';

const appRouter = Router();

appRouter.use(
  '/',
  authorRouter,
  bookRouter,
  rentRouter,
  clientRouter,
  authRouter
);

export default appRouter;
