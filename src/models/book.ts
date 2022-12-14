import {
  AutoIncrement,
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import Author from './author';
import Client from './client';
import Rent from './rent';

interface BookAttributes {
  id: number;
  isbn: string;
  name: string;
  price: number;
  stock: number;
  author_id: number;
}

export interface BookCreationAttributes
  extends Optional<BookAttributes, 'id'> {}

@Table
class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
{
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  isbn: string;
  @Column
  name: string;
  @Column
  price: number;
  @Column
  stock: number;
  @ForeignKey(() => Author)
  @Column
  author_id: number;

  @BelongsTo(() => Author)
  author: Author;

  @BelongsToMany(() => Client, () => Rent)
  clients: Client[];
}

export default Book;
