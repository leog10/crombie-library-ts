import Book from '../models/book';
import Client from '../models/client';

type Op = 'increase' | 'decrease';

export const getAllClients = async () => {
  const clients = await Client.findAll({
    attributes: {
      exclude: ['password']
    }
  });
  return clients;
};

export const getClientById = async (id: number) => {
  const client = await Client.findByPk(id, {
    attributes: { exclude: ['password'] },
    include: {
      model: Book
    }
  });
  return client;
};

export const updateBudget = async (id: number, money: number, op: Op) => {
  const client = await getClientById(id);

  if (!client) {
    return;
  }

  if (op === 'increase') {
    client.budget += money;
  } else if (op === 'decrease') {
    client.budget -= money;
  } else {
    return;
  }

  const result = await client.save();

  return result;
};
