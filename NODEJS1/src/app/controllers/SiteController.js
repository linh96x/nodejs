const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');
class SiteController {
  //[GET] /news
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        //courses = courses.map(course => course.toObject())
        res.render('home', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /news/:slug
  show(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
