import express from 'express';
import {
  createClient,
  getAllClients,
  updateBudget
} from '../controllers/client';

const clientRouter = express.Router();

clientRouter.get('/client', getAllClients);
clientRouter.post('/client', createClient);
clientRouter.put('/client/:id', updateBudget);

export default clientRouter;
