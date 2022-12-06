import { Request, Response } from 'express';
import * as clientServices from '../services/client';

type Op = 'increase' | 'decrease';

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

export const updateBudget = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { money, operation } = req.body as {
      money: number;
      operation: Op;
    };

    const result = await clientServices.updateBudget(id, money, operation);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
};
