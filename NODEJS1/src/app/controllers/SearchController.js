const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose');
class SearchController {
 
//   show(req, res, next) {
// 
//     Course.find({ $search })
//       .then((courses) =>
//         res.render('search', {
//           courses: mutipleMongooseToObject(courses),
//         }),
//       )
//       .catch(next);
//   }
// res.render('search');
 }
module.exports = new SearchController();
