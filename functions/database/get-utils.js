const getDocument = (doc) => Object.assign({ id: doc.id }, doc.data());
const getDocuments = (snapshot) => snapshot.docs.map(getDocument);
const getRows = (results) => {
  const [rows, fields] = results;
  return rows;
}

module.exports = {
  getDocument,
  getDocuments,
  getRows
};
