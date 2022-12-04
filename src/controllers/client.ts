import { Request, Response } from 'express';
import * as clientServices from '../services/client';

export const getAllClients = async (req: Request, res: Response) => {
  try {
    const clients = await clientServices.getAllClients();
    res.status(200).send(clients);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};

export const createClient = async (req: Request, res: Response) => {
  try {
    const client = req.body;
    const result = await clientServices.createClient(client);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};
