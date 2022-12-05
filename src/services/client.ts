import Client, { ClientCreationAttributes } from '../models/client';

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

export const updateBudget = async (id: number, spend: number) => {
  const client = await getClientById(id);

  if (!client) {
    return;
  }

  client.budget -= spend;

  const result = await client.save();

  return result;
};
