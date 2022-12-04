import { Optional } from 'sequelize';
import { AutoIncrement, BelongsToMany, Model } from 'sequelize-typescript';
import { Column, PrimaryKey, Table } from 'sequelize-typescript';
import Book from './book';
import BookClient from './bookClient';

interface ClientAttributes {
  id: number;
  name: string;
  lastname: string;
  budget: number;
  books?: Book[];
}

export interface ClientCreationAttributes
  extends Optional<ClientAttributes, 'id'> {}

@Table
class Client
  extends Model<ClientAttributes, ClientCreationAttributes>
  implements ClientAttributes
{
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  name: string;
  @Column
  lastname: string;
  @Column
  budget: number;

  @BelongsToMany(() => Book, () => BookClient)
  books: Book[];
}

export default Client;
