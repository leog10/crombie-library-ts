import { Request, Response } from 'express';
import * as bookClientServices from '../services/bookClient';
import * as bookServices from '../services/book';
import * as clientServices from '../services/client';

export const bookClientRent = async (req: Request, res: Response) => {
  try {
    const { client_id, book_id } = req.body;

    const client = await clientServices.getClientById(client_id);
    const book = await bookServices.getBookById(book_id);

    if (!client) {
      throw new Error('client not found');
    }

    if (!book) {
      throw new Error('book not found');
    }

    if (client.budget < book.price) {
      throw new Error('Client budget is not enough to rent this book');
    }

    if (book.stock === 0) {
      throw new Error('Book out of stock');
    }

    const result = await bookClientServices.bookClientRent(
      client_id,
      book_id,
      book.price
    );
    return res.status(201).send(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
