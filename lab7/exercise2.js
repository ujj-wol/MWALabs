const express = require('express');

const app = express();
const secretRoute = require('./secret');

app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.enable('trust proxy');

app.use("/secret", secretRoute);

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

// // the document with encrypted message has already been saved to collection lab7_ex2 from mongo shell
    // db.lab7_ex2.save({
    //     message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"
    // });

client.connect(function (err) {
    app.locals.db = client.db('MongoLabs');
    app.listen(4000);
    console.log('listening at port 4000...');
});


