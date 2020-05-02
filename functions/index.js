// Firebase Initialization
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Express Initialization
const express = require('express');
const cors = require('cors')
const rest = express();
rest.use(cors({ origin: true }));
rest.use(express.json());

// Routing
const questionsController = require('./controllers/questions-controller');

rest.get('/questions', questionsController.getAll);

// Final Export
exports.api = functions.https.onRequest(rest);
