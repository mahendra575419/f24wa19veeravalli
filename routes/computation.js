var express = require('express');
var router = express.Router();

function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

router.get('/', function(req, res, next) {
  
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 360;
  
  
  const y = getTanFromDegrees(x);
  
  
  res.send(`getTanFromDegrees applied to ${x} is ${y}`);
});

module.exports = router;
