const models = require('../models');

exports.main = (req, res) => {
    // //세션 없을 떄 확인 >>  undefined
    if(req.session.user_id !== undefined){
        models.Post.findAll({
            include: [
                {
                    model: models.User,
                },
                {
                    model: models.Likes,
                },
                {
                    model: models.Comment,
                }
            ]
        }).then((result) => {
            res.render('main', {isLogin: true, user: req.session.user_id, data: result});
        })
    }else{
        models.Post.findAll({
            include: [
                {
                    model: models.User,
                },
                {
                    model: models.Likes,
                },
                {
                    model: models.Comment,
                },
            ]
        }).then((result) => {
            console.log('main page에서 Data 확인 !! >> ', result); //[]
            
            res.render('main', {isLogin: false, data: result});
        })
    }

};