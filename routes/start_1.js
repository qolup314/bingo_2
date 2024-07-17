var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('start_1', { title: 'start_1' });
});

module.exports = router;
