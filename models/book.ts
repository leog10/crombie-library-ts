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
import BookClient from './bookClient';

interface BookAttributes {
  id: number;
  name: string;
  price: number;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

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
  name: string;
  @Column
  price: number;

  @ForeignKey(() => Author)
  @Column
  authorId: number;

  @BelongsTo(() => Author)
  author: Author;

  /*   @ForeignKey(() => Author)
  @Column
  clientId: number; */

  @BelongsToMany(() => Client, () => BookClient)
  clients: Client[];
}

export default Book;
