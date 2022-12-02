import { Model } from 'sequelize-typescript';
import { Column, ForeignKey, Table } from 'sequelize-typescript';
import Book from './book';
import User from './client';

interface bookClientAttributes {
  bookId: number;
  clientId: number;
}

@Table
class BookClient
  extends Model<bookClientAttributes>
  implements bookClientAttributes
{
  @ForeignKey(() => Book)
  @Column
  bookId: number;

  @ForeignKey(() => User)
  @Column
  clientId: number;
}

export default BookClient;
