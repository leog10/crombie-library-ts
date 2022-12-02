import { config } from 'dotenv';

config();

export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_NAME = process.env.DB_NAME || 'library_db';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DIALECT = 'mysql';
export const DB_PORT = Number(process.env.DB_PORT) || 3306;
export const PORT = Number(process.env.PORT) || 5000;
