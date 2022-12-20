import Book from '../models/book';

export const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

export const getBookById = async (id: number) => {
  const book = await Book.findByPk(id);
  return book;
};

export const createBook = async (
  isbn: string,
  name: string,
  price: number,
  stock: number,
  author_id: number
) => {
  const result = await Book.create({ isbn, name, price, stock, author_id });
  return result;
};

export const updateStock = async (id: number) => {
  const book = await getBookById(id);

  if (!book) {
    return;
  }

  book.stock -= 1;

  const result = await book.save();

  return result;
};
