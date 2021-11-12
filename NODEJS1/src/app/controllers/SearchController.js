const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose');
class SearchController {
  
  storedCourses(req, res, next) {
    
    Course.find({ name:'linh' })
      .then((courses) =>
        res.render('', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}
module.exports = new SearchController();
