const User = require('../models/User');
const models = require('../models');

//sequelize 쿼리문
// findAll() - select
// findOne() - select
// create() - insert
// update() - update
// destroy() - delete

//회원가입 페이지
//GET /user/join
exports.getJoin = (req, res) => {
    res.render('join');
};

//POST localhost: PORT/user/join - create user info (CREATE)
exports.postJoin = (req, res) => {
    models.User.create({
        //req: client로부터 받은 정보를 create
        user_id: req.body.user_id,
        user_pw: req.body.user_pw,
        user_name: req.body.user_name,
        user_birth: req.body.user_birth,
    }).then((result) => {
        res.send(result);
    });
};

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