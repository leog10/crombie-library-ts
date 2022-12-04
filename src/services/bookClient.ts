import Book from '../models/book';
import BookClient, { bookClientAttributes } from '../models/bookClient';
import Client from '../models/client';

export const bookClientRent = async (client_id: number, book_id: number) => {
  const client = await Client.findByPk(client_id);
  const book = await Book.findByPk(book_id);

  if (client && book && client?.budget < book?.price) {
    return;
  }

  const result = await BookClient.create({ client_id, book_id });
  return result;
};
