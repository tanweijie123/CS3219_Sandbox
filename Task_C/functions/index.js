const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express(); 

const apiRoutes = require('./api-routes'); 
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json()); 

mongoose.connect('mongodb://rest:restpassw0rd@149.28.159.224/restproj', { useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");


app.use(cors({ origin: true})); 

app.get('/', (req, res) => {
    res.status(200).send('Index - Using Server Port 8082'); 
}); 

// Use Api routes in the App
app.use('/api', apiRoutes);

var port = process.env.PORT || 8082;
var server = app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
module.exports = server
