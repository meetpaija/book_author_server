import { Sequelize } from 'sequelize-typescript';
import { Author } from '../models/author.model';
import { Book } from '../models/book.model';

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  models: [Book, Author],
  dialect: 'postgres',
  pool: {
    acquire: 10000
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});
