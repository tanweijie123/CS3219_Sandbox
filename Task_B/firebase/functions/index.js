const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express'); 
const cors = require('cors'); 

const app = express(); 
app.use(cors({ origin: true})); 

app.get('/', (req, res) => {
    res.status(200).send('Running on Google Functions'); 
}); 

app.get("/test", function (req, res) {
    return res.sendStatus(200).send('a');
})

app.get("/stripe-event", function (req, res) {
    //Do the processing
    return res.sendStatus(200).send('b');
})

exports.api = functions.https.onRequest(app); 