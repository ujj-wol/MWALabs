const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');

//default get for /api/location
router.get('/', (req, res) => {
  //res.end('You submit location details from here!');
  res.json({
    message: 'You submit location details from here!'
  });
});

// to find nearest 3 locations (i.e documents) to our current location from our collection
router.get("/find", [
  check("category", "category is mandatory").exists(),
  check("location", "location is required to find 3 points nearest to it")
], (req, res) => {

  console.log('find route entered!!');
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array()});
  }

  let searchDoc = {
    name: req.query.name,
    category: req.query.category,
    location: req.query.location
  };

  const nearestPoints = req.app.locals.db.collection('lab8_ex3')
                            .find({location: {$near: [-91.9665342, 41.017654]}}).project({_id:0}).limit(3).toArray((err, results) => {
                              if(err) return res.status(500).json({error: err});

                              res.json(results);
                            });

});

// to add a document to our collection
router.post("/add", [
  check("name", "name field is required").exists(),
  check("category", "category needs to be defined").exists(),
  check("location", "location needs to be defined").exists()
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
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