const { Sequelize } = require('sequelize');
const connection = require('../src/db_pool/connection');

const DB_Sequelize = new Sequelize({
    username: connection.username,
    password: connection.password,
    database: connection.database,
    host: connection.host,
    port: 5432,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = DB_Sequelize