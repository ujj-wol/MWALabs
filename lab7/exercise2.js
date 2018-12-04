const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
const crypto = require('crypto');
const aes256 = require('aes256');

let resp = "";

client.connect(function (err) {
    const db = client.db('MongoLabs');
    const collection = db.collection('lab7_ex2');

    collection.save({
        message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"
    });
    let respJSON = JSON.stringify({
        'secret': resp
    });

    var decrypted = aes256.decrypt("ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03", 'asaadsaad');
    console.log(decrypted);
    // collection.findOne()
    //     .then(x => console.log(x));

    // collection.findOne()
    //     .then(x => {
    //         resp = decrypt(x.message);
    //         console.log(resp);
    //     })
    //     .catch(err => console.log(`Error Occurred: ${err.message}`));
});

function decrypt(text) {
    let decypher = crypto.createDecipher("aes-256-gcm", 'asaadsaad');
    let dec = decypher.update(text, "hex", "utf8");
    // dec += decypher.final("utf8");
    console.log(dec);
};

// let respJSON = JSON.stringify({'secret': resp});

// var decrypted = aes256.decrypt("ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03", 'asaadsaad');
// console.log(decrypted);