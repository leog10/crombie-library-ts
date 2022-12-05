import BookClient, { bookClientAttributes } from '../models/bookClient';
import * as bookServices from './book';
import * as clientServices from './client';

export const bookClientRent = async (client_id: number, book_id: number) => {
  const client = await clientServices.getClientById(client_id);
  const book = await bookServices.getBookById(book_id);

  if (!client) {
    throw new Error('client not found');
  }

  if (!book) {
    throw new Error('book not found');
  }

  if (client.budget < book.price) {
    throw new Error('Client budget is not enough to rent this book');
  }

  if (book.stock === 0) {
    throw new Error('Book out of stock');
  }

  const clientBudget = await clientServices.updateBudget(client_id, book.price);

  const bookStock = await bookServices.updateStock(book_id);

  const result = await BookClient.create({ client_id, book_id });

  return { result, client: clientBudget, book: bookStock };
};
