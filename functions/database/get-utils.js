/* eslint-disable prefer-object-spread */
const getDocument = (doc) => Object.assign({ id: doc.id }, doc.data());
const getDocuments = (snapshot) => snapshot.docs.map(getDocument);
const getRows = (results) => results[0];

module.exports = {
  getDocument,
  getDocuments,
  getRows,
};
