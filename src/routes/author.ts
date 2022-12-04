import express from 'express';
import { createAuthor, getAllAuthors } from '../controllers/author';

const authorRouter = express.Router();

authorRouter.get('/author', getAllAuthors);
authorRouter.post('/author', createAuthor);

export default authorRouter;
