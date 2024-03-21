var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = (Math.random(1, 10));
    console.log(x);

    if (req.query.x){
        x = (req.query.x);
    }
    
    function asinh(x){
        return Math.asinh(x);
    }
    console.log(asinh(x));
    res.send(`Math.asinh applied on ${x} is ${asinh(x)}`);
});

module.exports = router;
