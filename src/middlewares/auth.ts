import { NextFunction, Request, RequestHandler, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Client from '../models/client';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

type Payload = {
  id: number;
  email: string;
  token: string;
};

export const auth: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: 'Access unauthorized' });
    }

    const token = req.headers.authorization.split(' ')[1];

    const payload = jwt.verify(token, 'secret') as Payload;

    if (!payload) {
      return res
        .status(500)
        .json({ error: 'There was a problem decoding the token' });
    }

    const client = Client.findByPk(payload.id);

    if (!client) {
      return res.status(500).json({ error: 'Error on authentication' });
    }

    next();
  } catch (error) {
    res.status(401).send('Please authenticate');
  }
};
