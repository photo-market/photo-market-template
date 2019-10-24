const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const cors = require('cors');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// Add middleware to authenticate requests
// app.use(myMiddleware);

const db = firebaseApp.firestore();

// build multiple CRUD interfaces:
// app.get('/:id', (req, res) => res.send(Widgets.getById(req.params.id)));

app.get('/api/test', (req, res) => {
    res.json({date: Date.now()});
});

app.get('/api/hello', (req, res) => {
    db.collection("users").get()
        .then((querySnapshot) => {
            console.log("Data loaded!");
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
            return 0;
        })
        .catch((error) => {

        });
    res.send("Hello");
});

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.photoMarketApp = functions.https.onRequest(app);