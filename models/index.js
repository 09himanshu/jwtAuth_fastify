const Sequelize = require('sequelize');
const config = require('../config/server.config');

const sequelize = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: Number(config.pool.max),
        min: Number(config.pool.min),
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
})

let db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require('./user.models')(sequelize,Sequelize);
db.auth = require("./auth.models")(sequelize, Sequelize);

module.exports = db;