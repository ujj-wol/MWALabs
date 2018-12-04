const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');


let grades = [{id: 1, name: 'Asaad Saad', course: 'CS572', grade: 95}];
let index = 1;

/* GET list of grades. */
router.get('/', function(req, res, next) {
  res.json(grades);
});

/* Add new grade */
router.post('/create', [
  check('name', 'name field is required').exists(),
  check('course','Course field is required').exists(),
  check('grade','Grade field is required').exists(),
  check('grade','Grade should be a number').isNumeric()
], function(req, res, next) {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()});
  }

  const newGrade = {
    id: ++index,
    name: req.body.name,
    course: req.body.course,
    grade: req.body.grade
  };

  console.log(newGrade);

  grades.push(newGrade);

  res.status(201).json(newGrade);

});

// Update grade
router.put('/update/:id', [
  check('name', 'name field is required').exists(),
  check('course','Course field is required').exists(),
  check('grade','Grade field is required').exists(),
  check('grade','Grade should be a number').isNumeric()
],function(req, res, next){

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()});
  }

  let existingGrade = grades.find(grade => grade.id == req.params.id);

  if(!existingGrade){
    return res.status(422).json({errors: [
      {
        msg: 'The given id does not exist'
      }
    ]});
  }

  console.log(req.params.id, req.body);
  
  const updatedGrade = {
    id: existingGrade.id,
    name: req.body.name,
    course: req.body.course,
    grade: req.body.grade
  };

  const indexOfGrade = grades.indexOf(existingGrade);
  grades[indexOfGrade]  = updatedGrade;
  res.status(202).json(updatedGrade);
});

// Delete grade
router.delete('/delete/:id',function(req, res, next){
  let existingGrade = grades.find(grade => grade.id == req.params.id);
  
    if(!existingGrade){
      return res.status(422).json({errors: [
        {
          msg: 'The given id does not exist'
        }
      ]});
    }

    const newGrades = grades.filter(grade => grade.id != existingGrade.id);
    grades  = newGrades;
    res.status(200).json({ msg: 'The Grade deleted successfully.'});
});


module.exports = router;
