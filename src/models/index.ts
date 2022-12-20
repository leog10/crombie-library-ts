import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { development as db } from '../config/config';
import Author from './author';
import Book from './book';
import Client from './client';
import Rent from './rent';

const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect as Dialect,
  port: db.port,
  models: [Book, Author, Client, Rent],
  logging: false
});

export default sequelize;
