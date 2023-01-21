const express = require('express');
const { route } = require('.');
const controller = require('../controller/Cuser');
const router = express.Router();

//localhost: PORT/sign

//GET /user/join
router.get('/join', controller.getJoin);
router.post('/join', controller.postJoin);
//GET /user/login
router.get('/login', controller.getLogin);
//POST /user/login
router.post('/login', controller.postLogin);
//GET /user/mypageInfo
router.get('/mypageInfo', controller.getmypageInfo);

module.exports = router;