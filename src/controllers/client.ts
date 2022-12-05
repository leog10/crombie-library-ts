import { Request, Response } from 'express';
import * as clientServices from '../services/client';

export const getAllClients = async (req: Request, res: Response) => {
  try {
    const clients = await clientServices.getAllClients();
    return res.status(200).send(clients);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};

export const createClient = async (req: Request, res: Response) => {
  try {
    const client = req.body;
    const result = await clientServices.createClient(client);
    return res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};

export const getClientById = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const result = await clientServices.getClientById(id);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};