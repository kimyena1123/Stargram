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
//GET /user/infoEdit
router.get('/infoEdit', controller.getInfoEdit);

module.exports = router;