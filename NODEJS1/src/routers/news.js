const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');
//phương thức mới
router.get('/:slug', newsController.show);
router.get('/', newsController.index);
//phương thức cũ - có thể xóa
router.use('/:slug', newsController.show);
router.use('/', newsController.index);
module.exports = router;
