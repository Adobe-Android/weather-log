const { Client } = require('pg');
const newLocal = new Client({
    user: 'db_user',
    host: 'hostname',
    database: 'db',
    password: 'pass',
    port: 5432,
});
exports.creds = newLocal;