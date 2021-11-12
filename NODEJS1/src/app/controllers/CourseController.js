const Course = require('../models/Course');

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose');
class CourseController {
  //show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }
  //create
  create(req, res, next) {
    res.render('courses/create');
  }
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {});
  }
  //[GET] / courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id).then((course) =>
      res.render('courses/edit', {
        course: mongooseToObject(course),
      }),
    );
  }
  //[PUT] / courses/:id/
  update(req, res, next) {
    //   res.json(req.body);
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('http://localhost:3000'))
      .catch(next);
  }
  //[DELETE] / courses/:id/
  delete(req, res, next){
Course.deleteOne({ _id: req.params.id })
.then(() => res.redirect('back'))
.catch(next);

  }
  //[SEARCH]
  search(req, res, next) {
    Course.find(req.params.name).then((course) =>
      res.render('search', {
        course: mongooseToObject(course),
      }),
    );
  }














}
//GET,POST,PUT,PATH,DELETE,OPTIONS,HEAD
//dùng PUT để chỉnh sửa

module.exports = new CourseController();
