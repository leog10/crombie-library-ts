import { Request, Response } from 'express';
import * as authorServices from '../services/author';

export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await authorServices.getAllAuthors();
    res.status(200).send(authors);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = req.body;
    const result = await authorServices.createAuthor(author);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};
