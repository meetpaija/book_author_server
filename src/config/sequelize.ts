import path from 'path'; // ✅ ensure this line is present

import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 24789,
  models: [path.join(__dirname, 'src/models')],
  dialect: 'postgres',
});
