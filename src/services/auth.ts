import Client, { ClientCreationAttributes } from '../models/client';

export const signup = async (client: ClientCreationAttributes) => {
  const result = await Client.create(client);
  return result;
};
