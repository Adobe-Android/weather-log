const { Client } = require('pg');
const secKey = 'secret';
const newLocal = new Client({
    user: 'db_user',
    host: 'hostname',
    database: 'db',
    password: 'pass',
    port: 5432,
});
exports.creds = newLocal;
exports.apiKey = secKey;