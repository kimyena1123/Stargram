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
    //INSERT INTO `user` (user_id,user_pw,user_name,user_birth,..) value (`${data.user_id}, ${data.user_pw}, ${data.user_name}, ${data.user_birth}, now(), now()`)
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

// POST/user/login
//로그인 정보 일치 => 세션 설정
//로그인 정보 불일치 => 경로 이동
exports.postLogin = (req, res) => { //return res.data;
    console.log('req.body.user_id >> ', req.body.user_id);

//SELECT * FROM `user` WHERE user_id = `${data.user_id} AND user_pw = `${data.user_pw}` LIMIT 1
    models.User.findOne({
        where: {
            user_id: req.body.user_id,
            user_pw: req.body.user_pw,
        }
    }).then((result) =>{
        console.log('로그인 창에서 result 확인 >> ', result);
        console.log('로그인 창에서 dataValue 확인 >> ', result.dataValues);
        console.log('!!!!!!!!!!');
        console.log('로그인 창에서 dataValue 확인 >> ', result.dataValues.id);
        if(result === null){ // 로그인 실패 => null
            //세션 없을 떄 확인 >>  undefined
            console.log('세션 없을 떄 확인 >> ', req.session.user_id);
            res.send(false);

        }else{ // 로그인 성공 // 객체로
            console.log('로그인 성공 후 req.body >> ', req.body); // { user_id: '1', user_pw: '1' }
            console.log("req.body.user_id 확인!!!!>> ", req.body.user_id);
            //세션 설정
            req.session.user_id = req.body.user_id;
            req.session.user_index = result.id;

            console.log('세션 확인 >> ', req.session.user_id);
            res.send(true);
        }
    })
}

//마이페이지
//GET /user/infoEdit
exports.getmypageInfo = (req, res) => {
    console.log('getMypage에서 req.body 확인 >> ', req.body);
    console.log('getMaypage에서 index보기 >> ', req.session.user_index);

    if(req.session.user_index){
        models.User.findOne({
            where: {id: req.session.user_index},
            include: [
                {
                    model: models.Post,
                    attributes: ['userId']
                },
                {
                    model: models.Likes,
                    attributes: ['userId']
                }
            ]
        }).then((result) => {
            console.log('findOne >> ', result);
            console.log('include의 post >> ', result.posts);
            UserData = result;

            //select * from `post` where userId = req.session.user_index
            models.Post.findOne({
                where: {userId: req.session.user_index},
            }).then((result) => {
                
                res.render('mypage', {UserData: UserData, PostData: result});
            })
    

        })
    }else{
        res.render('login');
    }
};
