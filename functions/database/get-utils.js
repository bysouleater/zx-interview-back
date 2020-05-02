/* eslint-disable prefer-object-spread */

/**
 * Creates the representation of a firestore database document along with it's id
 * @param {*} doc The Firestore document
 */
const getDocument = (doc) => Object.assign({ id: doc.id }, doc.data());

/**
 * Creates the representation of a list of Firestore database documents
 * @param {*} snapshot The Firestore result of a query
 */
const getDocuments = (snapshot) => snapshot.docs.map(getDocument);

/**
 * Access the resulting list of objects from MySQL query
 * @param {*} results The MySQL results
 */
const getRows = (results) => results[0];

module.exports = {
  getDocument,
  getDocuments,
  getRows,
};
