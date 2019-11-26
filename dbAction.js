const { creds: newLocal } = require("./creds");

function dbAction(dbQuery, dbValues) {
    const client = newLocal;
    client.connect();
    client.query(dbQuery, dbValues)
        .catch(e => console.error(e.stack))
        .finally(() => client.end());
}
exports.dbAction = dbAction;