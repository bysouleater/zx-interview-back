const functions = require('firebase-functions');
const admin = require('firebase-admin');
const mysql = require('mysql2/promise');

const { TYPE_FIRESTORE, TYPE_MYSQL } = require('./database-types');

// We get database information from environment variables
const { type } = functions.config().database;

let getConnection = null;

if (type === TYPE_FIRESTORE) {
  getConnection = async () => Promise.resolve(admin.firestore());
} else if (type === TYPE_MYSQL) {
  const {
    host, user, password, database,
  } = functions.config().database;
  getConnection = async () => mysql.createConnection({
    host, user, password, database,
  });
} else {
  console.error('Wrong database type! ', type);
  process.exit(1);
}

module.exports = {
  getConnection,
  type,
};
