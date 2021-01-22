var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Hahah')
  res.render('account/login', { title: 'Express' });
});

module.exports = router;
