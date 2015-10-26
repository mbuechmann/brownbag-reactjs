var express = require('express');
var router = express.Router();

var ratings = [];

/* GET ratings listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({
    ratings: ratings
  });
});

router.post('/', function(req, res, next) {
  ratings.push({
    text: req.body.text,
    stars: req.body.stars
  });
  res.sendStatus(201);
});

module.exports = router;
