import { Model } from 'sequelize-typescript';
import { Column, ForeignKey, Table } from 'sequelize-typescript';
import Book from './book';
import User from './client';

export interface bookClientAttributes {
  book_id: number;
  client_id: number;
}

@Table
class Rent extends Model<bookClientAttributes> implements bookClientAttributes {
  @ForeignKey(() => Book)
  @Column
  book_id: number;

  @ForeignKey(() => User)
  @Column
  client_id: number;
}

export default Rent;
