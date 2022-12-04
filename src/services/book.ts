import Book, { BookCreationAttributes } from '../models/book';

export const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

export const createBook = async (
  isbn: string,
  name: string,
  price: number,
  author_id: number
) => {
  const result = await Book.create({ isbn, name, price, author_id });
  return result;
};
