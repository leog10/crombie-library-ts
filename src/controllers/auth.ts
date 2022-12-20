import { Request, Response } from 'express';
import Client, { ClientOutput } from '../models/client';
import bcrypt from 'bcrypt';
import * as authServices from '../services/auth';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {
  try {
    const client: Client = req.body;

    if (!client.password || !client.email || !client.name || !client.lastname) {
      return res.status(400).json({ error: 'All fields are mandatory' });
    }

    const salt = bcrypt.genSaltSync(10);
    client.password = bcrypt.hashSync(client.password, salt);

    const { id, name, lastname, budget, email } = await authServices.signup(
      client
    );

    const newClient: ClientOutput = { id, name, lastname, budget, email };

    return res.status(201).send(newClient);
  } catch (error: any) {
    if (error.original.errno === 1062) {
      return res.status(400).json({ error: 'Email is already used' });
    }
    res.status(400).send({ error: 'Something went wrong' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are mandatory' });
    }

    const client: Client | null = await Client.findOne({
      where: {
        email: email
      }
    });

    if (!client) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const pass = bcrypt.compareSync(password, client.password);

    if (!pass) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: client.id, email: client.email }, 'secret', {
      expiresIn: '1day'
    });

    return res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error: 'Something went wrong' });
  }
};
