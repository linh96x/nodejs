const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);
//pt cũ
router.use('/:slug', newsController.show);
router.use('/', newsController.index);
module.exports = router;
