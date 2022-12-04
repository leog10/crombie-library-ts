import express from 'express';
import { createBook, getAllBooks } from '../controllers/book';

const bookRouter = express.Router();

bookRouter.get('/book', getAllBooks);
bookRouter.post('/book', createBook);

export default bookRouter;
