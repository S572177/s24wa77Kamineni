var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = (Math.random(1, 10));
    var y = (Math.random(1, 10));
    console.log(x);
    console.log(y);

    if (req.query.x){
        x = (req.query.x);
    }
    if (req.query.y){
        y = (req.query.y);
    }

    function getCircleX(radians, radius) {
        return Math.cos(radians) * radius;
      }
      
      
});

module.exports = router;
