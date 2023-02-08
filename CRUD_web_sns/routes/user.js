const express = require('express');
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

//[로그아웃 라우터]
//GET /user/logout
router.get('/logout', controller.getLogout);

//GET /user/mypageInfo
router.get('/mypageInfo', controller.getmypageInfo);
//POST /user/mypage/userInfo
router.post('/mypage/userInfo', controller.postUserInfoEdit);
//POST /user/mypage/idTest
router.post('/mypage/idTest', controller.postIdTest);
//POST /user/mypage/pwTest

//POST /user/mypage/myPostDelete
router.post('/mypage/myPostDelete', controller.postMyPostDelete);
module.exports = router;