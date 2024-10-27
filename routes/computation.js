var express = require('express');
var router = express.Router();
const lastDigitOfId = 7; 

// Define Math functions based on the last digit
const mathFunctions = [
  Math.asinh,
  Math.asin,
  Math.cos,
  Math.sin,
  Math.tan,
  Math.sqrt,
  Math.log,
  Math.exp
];


router.get('/', function(req, res) {
 
  let x = Math.random() * 10; 

  if (req.query.x) {
    x = parseFloat(req.query.x); 
  }

  
  const selectedFunction = mathFunctions[lastDigitOfId];

 
  const y = selectedFunction(x);

  
  const responseString = `${selectedFunction.name} applied to ${x.toFixed(2)} is ${y}`;

 
  res.send(responseString);
});

module.exports = router;
