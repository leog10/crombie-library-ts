import { Request, Response } from 'express';
import * as bookServices from '../services/book';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookServices.getAllBooks();
    res.status(200).send(books);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { isbn, name, price, stock, author_id } = req.body;

    if (!isbn || !name || !price || !stock || !author_id) {
      throw new Error('All fields are mandatory');
    }

    const result = await bookServices.createBook(
      isbn,
      name,
      price,
      stock,
      author_id
    );
    return res.status(201).send(result);
  } catch (error: any) {
    console.log(error);
    if (error.original && error.original.errno === 1452) {
      return res.status(404).send({ error: 'author_id not found' });
    }
    if (error.original && error.original.errno === 1062) {
      return res
        .status(404)
        .send({ error: 'duplicate isbn. isbn should be unique' });
    }
    res.status(400).send({ error: error!.message });
  }
};
