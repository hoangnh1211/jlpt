var express = require('express');
var router = express.Router();
var pointModel = require('./../model/pointModel')
var isLogin = require('./../model/authModel').checkLogin;

/* GET users listing. */
router.get('/:id', isLogin, pointModel.get);
router.post('/:id', isLogin, pointModel.add)
module.exports = router