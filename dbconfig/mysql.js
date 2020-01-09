const {createPool} = require("mysql");

const pool = createPool({
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: process.env.MYSQL_CONN_LIM
});

module.exports = pool;