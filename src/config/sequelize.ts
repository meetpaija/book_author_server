// import { Sequelize } from 'sequelize';

// const env = process.env.NODE_ENV || 'development';
// const config = {
//     url: process.env.URL as string,
//     database: process.env.database as string,
//     username: process.env.username as string,
//     password: process.env.password as string,
// };

// const sequelize = config.url
//   ? new Sequelize(config.url, config)
//   : new Sequelize(config.database, config.username, config.password, config);

// export { Sequelize, sequelize };

import { Sequelize } from 'sequelize-typescript';
import { fileURLToPath } from 'url';
import path from 'path';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 24789,
    models: [__dirname + "models"],
    dialect: 'postgres'
})

export default sequelize;