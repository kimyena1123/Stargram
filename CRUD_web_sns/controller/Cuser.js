const {User} = require('../models');
const models = require('../models');

//회원가입 페이지
//GET /user/join
exports.getJoin = (req, res) => {
    res.render('join');
};

//create
exports.postJoin = (req, res) => {
    
}

//로그인 페이지
//GET /user/login
exports.getLogin = (req, res) => {
    res.render('login');
};

//마이페이지
//GET /user/infoEdit
exports.getInfoEdit = (req, res) => {
    res.render('mypage');
}