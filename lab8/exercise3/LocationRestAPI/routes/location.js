const router = require('express').Router();
const {check, validationResult} = require('express-validator/check');

//default get for /api/location
router.get('/', (req, res) => {
    //res.end('You submit location details from here!');
    res.json({message: 'You submit location details from here!'});
});

router.post("/", [
    check("name", "name field is required").exists(),
    check("category", "category needs to be defined").exists(),
    check("location", "location needs to be defined").exists()
  ], (req, res) => {
    const errors = validationResult(req);
  
    if(!errors.isEmpty()){
      return res.status(422).json({errors: errors.array()});
    }
  
    let newDoc = {
      name: req.body.name,
      category: req.body.category,
      location: req.body.location
    };
  
    const collection = req.app.locals.db.collection('lab8_ex3');
    collection.insertOne(newDoc, (err, insertedDoc) => {
      if (err) throw err;
      console.log('Following 1 document inserted:');
      return res.status(200).json(insertedDoc);
      // db.close();
    });
  
  });

  module.exports = router;