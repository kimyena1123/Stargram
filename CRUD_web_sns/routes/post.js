const express = require('express');
const router = express.Router();

const controller = require('../controller/Cpost');


//기본주소 => localhost:PORT/post

//GET / => localhost: PORT/
router.get('/', controller.main);

module.exports = router;