import BookClient from '../models/bookClient';
import * as bookServices from './book';
import * as clientServices from './client';

export const bookClientRent = async (
  client_id: number,
  book_id: number,
  bookPrice: number
) => {
  const clientBudget = await clientServices.updateBudget(
    client_id,
    bookPrice,
    'decrease'
  );

  const bookStock = await bookServices.updateStock(book_id);

  const result = await BookClient.create({ client_id, book_id });

  return { result, client: clientBudget, book: bookStock };
};
