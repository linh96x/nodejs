const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.show);
router.get('/', siteController.index);
//pt cũ
router.use('/search', siteController.show);
router.use('/', siteController.index);
//
/*
router.get('/search', function(req,res,next){
    var q = req.res.q;
*/

module.exports = router;
