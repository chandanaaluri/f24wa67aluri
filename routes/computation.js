var express = require('express');
var router = express.Router();

// Function to get the last digit of your ID
const lastDigitOfId = 1; // Replace with the last digit of your ID

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

// Define the endpoint
router.get('/', function(req, res) {
  // Generate a random value
  let x = Math.random() * 10; // Random value between 0 and 10

  // Check for query parameter
  if (req.query.x) {
    x = parseFloat(req.query.x); // Use the provided value if it exists
  }

  // Get the selected Math function based on the last digit
  const selectedFunction = mathFunctions[lastDigitOfId];

  // Apply the Math function
  const y = selectedFunction(x);

  // Create the response string
  const responseString = `${selectedFunction.name} applied to ${x.toFixed(2)} is ${y}`;

  // Send the response
  res.send(responseString);
});

module.exports = router;
