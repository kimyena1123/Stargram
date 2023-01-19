const express = require('express');
const router = express.Router();

const controller = require('../controller/Cmain');

//기본주소 => localhost:POST

//GET / => localhost: PORT/
router.get('/', controller.main);

module.exports = router;