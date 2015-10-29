var express = require('express');
var router = express.Router();

var ratings = [
  {text: 'Good UI! Many alert choices.', stars: 5},
  {text: 'Running Great! No crashes', stars: 5}
];

/* GET ratings listing. */
router.get('/', function(req, res, next) {
  res.json({
    ratings: ratings
  });
});

router.post('/', function(req, res, next) {
  ratings.push({
    text: req.body.text,
    stars: parseInt(req.body.stars)
  });
  res.statusCode = 201;
  res.json({success: true});
});

module.exports = router;
