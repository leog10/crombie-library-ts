import Client, { ClientCreationAttributes } from '../models/client';

export const getAllClients = async () => {
  const clients = await Client.findAll();
  return clients;
};

export const createClient = async (client: ClientCreationAttributes) => {
  const result = await Client.create(client);
  return result;
};
