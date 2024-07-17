var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bingo_game', { title: 'bingo_game' });
});

module.exports = router;
