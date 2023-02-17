const express = require('express');
const router = express.Router();

const controller = require('../controller/Cpost');


//기본주소 => localhost:PORT/

//GET / => localhost: PORT/
router.get('/', controller.main);

//게시물 올리기 페이지
//GET / => localhost: PORT/post
router.get('/post', controller.getPost);

//게시물 upload
//router.post('/post/upload', controller.postUpload);

module.exports = router;