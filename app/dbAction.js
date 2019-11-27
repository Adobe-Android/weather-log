const { creds: newLocal } = require('../creds/creds');
const client = newLocal;
client.connect();

function dbAction(dbQuery, dbValues) {
    client.query(dbQuery, dbValues)
        .catch(e => console.error(e.stack))
        .finally(() => client.end());
}
exports.dbAction = dbAction;