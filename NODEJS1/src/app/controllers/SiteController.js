const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  //[GET] /news
  index(req, res, next) {
    // Course.find({}, function(err, courses) {
    //     if (!err) {
    //         res.json(courses);

    //     } else {
    //         next(err);
    //         res.status(400).json({ error: 'error' });
    //     }

    // });
    Course.find({})
      .then((courses) => {
        //courses = courses.map(course => course.toObject())
        res.render('home', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
    // res.json({
    //     name: 'linh'
    // });
    // res.render('home');
  }

  //[GET] /news/:slug
  show(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
