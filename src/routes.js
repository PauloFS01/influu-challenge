const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { list: 'values here!' });
});

module.exports = router;
