import Rent from '../models/rent';
import * as bookServices from './book';
import * as clientServices from './client';

export const clientRentBook = async (
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

  const result = await Rent.create({ client_id, book_id });

  return { result, client: clientBudget, book: bookStock };
};
