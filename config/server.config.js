if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    port: process.env.port,
    host: process.env.host,
    db: process.env.db,
    user: process.env.user,
    password: process.env.password,
    dialect: process.env.dialect,
    secret: process.env.secret,
    pool: {
        max: process.env.max,
        min: process.env.min,
        acquire: process.env.acquire,
        idle: process.env.idle
    }
}