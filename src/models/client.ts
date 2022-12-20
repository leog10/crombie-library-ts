import { Optional } from 'sequelize';
import { AutoIncrement, BelongsToMany, Model } from 'sequelize-typescript';
import { Column, PrimaryKey, Table } from 'sequelize-typescript';
import Book from './book';
import Rent from './rent';

interface ClientAttributes {
  id: number;
  name: string;
  lastname: string;
  budget: number;
  books?: Book[];
  email: string;
  password: string;
}

export interface ClientCreationAttributes
  extends Optional<ClientAttributes, 'id'> {}

export interface ClientOutput extends Optional<ClientAttributes, 'password'> {}

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
  @Column
  email: string;
  @Column
  password: string;

  @BelongsToMany(() => Book, () => Rent)
  books: Book[];
}

export default Client;
