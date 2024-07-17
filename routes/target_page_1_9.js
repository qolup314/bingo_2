var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('target_page_1_9', { title: 'target_page_1_9' });
});

module.exports = router;