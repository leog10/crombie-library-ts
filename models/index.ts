import { Sequelize } from 'sequelize-typescript';
import {
  DB_DIALECT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER
} from '../config/config';
import Author from './author';
import Book from './book';
import BookClient from './bookClient';
import Client from './client';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT,
  models: [Book, Author, Client, BookClient]
});

export default sequelize;
