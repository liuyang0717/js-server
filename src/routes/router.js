var express = require('express');

var customer = require('./customer');
var admin = require('./admin');

var router = express.Router();

exports = module.exports = router;

router.use('/customer', customer);
router.use('/admin', admin);
