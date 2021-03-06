const { getConnection, type } = require('../database/database');
const { TYPE_FIRESTORE, TYPE_MYSQL } = require('../database/database-types');
const { getDocuments, getRows } = require('../database/get-utils');

/**
 * Firestore implementation of Get All Questions
 */
const firestoreGetAll = async () => getDocuments(await (await getConnection()).collection('questions').get());

/**
 * MySQL implementation of Get All Questions
 */
const mysqlGetAll = async () => getRows(await (await getConnection()).execute('SELECT * FROM questions'));

module.exports = {
  [TYPE_FIRESTORE]: {
    getAll: firestoreGetAll,
  },
  [TYPE_MYSQL]: {
    getAll: mysqlGetAll,
  },
}[type];
