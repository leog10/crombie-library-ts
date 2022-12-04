import express from 'express';
import { bookClientRent } from '../controllers/bookClient';

const bookClientRouter = express.Router();

bookClientRouter.post('/rent', bookClientRent);

export default bookClientRouter;
