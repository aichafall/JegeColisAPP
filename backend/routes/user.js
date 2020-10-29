const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.put('/modifprofil/:id', userCtrl.modifprofil);

module.exports = router;