import Client, { ClientCreationAttributes } from '../models/client';

type Op = 'increase' | 'decrease';

export const getAllClients = async () => {
  const clients = await Client.findAll();
  return clients;
};

export const createClient = async (client: ClientCreationAttributes) => {
  const result = await Client.create(client);
  return result;
};

export const getClientById = async (id: number) => {
  const result = await Client.findByPk(id);
  return result;
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
