const express = require('express');
const router = express.Router();

const crypto = require('crypto');
const algorithm = 'aes256';
const password = 'asaadsaad';


function decrypt(text) {
    let decypher = crypto.createDecipher(algorithm , password);
    let decryptedText = decypher.update(text, "hex", "utf8");
    decryptedText += decypher.final("utf8");
    console.log(decryptedText);
    return decryptedText;
}

router.get("/", (req, res, next) => {

    const collection = req.app.locals.db.collection('MongoLabs.lab7_ex2');
    const doc = collection.findOne({});

    doc.then((data) => {
        console.log(data);
        let decryptedText = decrypt(data.message);
        res.status(200).json(decryptedText);
    });
    //res.json(decrypt("ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"));
});

module.exports = router;