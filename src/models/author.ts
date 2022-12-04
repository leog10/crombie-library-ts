import {
  HasMany,
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import Book from './book';

interface AuthorAttributes {
  id: number;
  name: string;
  age: number;
  books?: Book[];
}

export interface AuthorCreationAttributes
  extends Optional<AuthorAttributes, 'id'> {}

@Table
class Author
  extends Model<AuthorAttributes, AuthorCreationAttributes>
  implements AuthorAttributes
{
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  name: string;
  @Column
  age: number;

  @HasMany(() => Book)
  books: Book[];
}

export default Author;
