import Author, { AuthorCreationAttributes } from '../models/author';

export const getAllAuthors = async () => {
  const authors = await Author.findAll();
  return authors;
};

export const createAuthor = async (author: AuthorCreationAttributes) => {
  const result = await Author.create(author);
  return result;
};
