var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('my_number_2', { title: 'マイナンバーについての確認ページ' });
});

module.exports = router;
