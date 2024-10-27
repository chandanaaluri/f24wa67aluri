var express = require('express');
var router = express.Router();

// Initialize variables
let value = 0;
let total = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Modify values
  value += 2;
  total += value;
  
  // Send the response
  res.send(`Total is: ${total}`);
});

module.exports = router;
