const { getConnection, type } = require('../database/database');
const { TYPE_FIRESTORE, TYPE_MYSQL } = require('../database/database-types')
const { getDocument } = require('../database/get-utils');

const firestoreCreate = async (body) => (await getConnection()).collection('answers').add(body);

const firestoreGet = async (id) => getDocument(await (await getConnection()).collection('answers').doc(id).get());

const mysqlCreate = async (body) => {throw new Error('Unsupported operation')};

const mysqlGet = async (id) => {throw new Error('Unsupported operation')};

module.exports = {
  [TYPE_FIRESTORE]: {
    create: firestoreCreate,
    get: firestoreGet
  },
  [TYPE_MYSQL]: {
    create: mysqlCreate,
    get: mysqlGet
  }
}[type];
