import express from 'express';
import { createClient, getAllClients } from '../controllers/client';

const clientRouter = express.Router();

clientRouter.get('/client', getAllClients);
clientRouter.post('/client', createClient);

export default clientRouter;
