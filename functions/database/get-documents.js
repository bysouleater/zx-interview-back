const getDocument = (doc) => Object.assign({ id: doc.id }, doc.data());
const getDocuments = (snapshot) => snapshot.docs.map(getDocument);

module.exports = {
  getDocument,
  getDocuments
};
