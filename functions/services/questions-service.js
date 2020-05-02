const db = require('../database/database');
const { getDocuments } = require('../database/get-documents');

const questionsCollection = db.collection('questions');

const getAll = async () => getDocuments(await questionsCollection.get());

module.exports = {
  getAll,
};
