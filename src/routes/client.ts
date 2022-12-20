import express from 'express';
import {
  getAllClients,
  getClientById,
  updateBudget
} from '../controllers/client';
import { auth } from '../middlewares/auth';

const clientRouter = express.Router();

clientRouter.get('/client', auth, getAllClients);
clientRouter.get('/client/:id', auth, getClientById);
clientRouter.put('/client/:id', auth, updateBudget);

export default clientRouter;
