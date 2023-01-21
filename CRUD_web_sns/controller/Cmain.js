exports.main = (req, res) => {

    //세션 없을 떄 확인 >>  undefined
    if(req.session.user_id !== undefined){
        res.render('main', {isLogin: true, user: req.session.user_id});
    }else{
        res.render('main', {isLogin: false});
    }
};