var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('future_time_1', { title: 'future_time_1' });
});

module.exports = router;
