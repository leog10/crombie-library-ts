import express from 'express';
import { clientRentBook } from '../controllers/rent';
import { auth } from '../middlewares/auth';

const rentRouter = express.Router();

rentRouter.post('/rent', auth, clientRentBook);

export default rentRouter;
