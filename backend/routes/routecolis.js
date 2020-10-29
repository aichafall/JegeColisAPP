const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/controllercolis');

router.get('/', stuffCtrl.getAllColis);
router.post('/', stuffCtrl.createColis);
router.get('/:id',stuffCtrl.getOneColis);
router.put('/:id', stuffCtrl.modifyColis);
router.delete('/:id',stuffCtrl.deleteColis);

module.exports = router;