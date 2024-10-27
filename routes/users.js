let value = 0;
let total = 1;

router.get('/', function(req, res, next) {
    value += 2;
    total += value;
    res.send(`Total is: ${total}`);
});
