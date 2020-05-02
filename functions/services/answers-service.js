const { getConnection, type } = require('../database/database');
const { TYPE_FIRESTORE, TYPE_MYSQL } = require('../database/database-types');
const { getDocument } = require('../database/get-utils');

/**
 * Firestore implementation of create document for user's answers
 * @param {*} body An object containing all user's answers
 */
const firestoreCreate = async (body) => (await getConnection()).collection('answers').add(body);

/**
 * Firestore implementation of get document for user's answers
 * @param {*} id The id of the document that has user's answers
 */
const firestoreGet = async (id) => getDocument(await (await getConnection()).collection('answers').doc(id).get());

/**
 * MySQL implementation of create document for user's answers.
 * Currently not implemented
 */
const mysqlCreate = async () => { throw new Error('Unsupported operation'); };

/**
 * MySQL implementation of get document for user's answers.
 * Currently not implemented
 */
const mysqlGet = async () => { throw new Error('Unsupported operation'); };

module.exports = {
  [TYPE_FIRESTORE]: {
    create: firestoreCreate,
    get: firestoreGet,
  },
  [TYPE_MYSQL]: {
    create: mysqlCreate,
    get: mysqlGet,
  },
}[type];
