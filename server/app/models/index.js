const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./users.model.js")(sequelize, Sequelize);
db.product = require("./products.model.js")(sequelize, Sequelize);

module.exports = db;