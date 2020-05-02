const db = require('../database/database');
const { getDocument } = require('../database/get-documents');

const answersCollection = db.collection('answers');

const create = async (body) => await answersCollection.add(body);

const get = async (id) => getDocument(await answersCollection.doc(id).get());

module.exports = {
  create,
  get
};
