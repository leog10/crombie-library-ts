import { Request, Response } from 'express';
import * as bookClientServices from '../services/bookClient';

export const bookClientRent = async (req: Request, res: Response) => {
  try {
    const { client_id, book_id } = req.body;
    const result = await bookClientServices.bookClientRent(client_id, book_id);
    return res.status(201).send(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
