const { Router } = require('express');
const { userLogin } = require('../controlers/auth.controler');

const router = Router();

router.post('/auth/login', userLogin);

module.exports = router;