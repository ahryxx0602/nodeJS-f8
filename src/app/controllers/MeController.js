const Course = require("../models/Course");
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../utils/mongoose");

class MeController {
  //[GET] /me/store/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-Courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  //[POST] /course/store
}

module.exports = new MeController();
