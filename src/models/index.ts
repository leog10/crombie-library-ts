import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { development as db } from '../config/config';
import Author from './author';
import Book from './book';
import BookClient from './bookClient';
import Client from './client';

const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect as Dialect,
  port: db.port,
  models: [Book, Author, Client, BookClient]
});

export default sequelize;
