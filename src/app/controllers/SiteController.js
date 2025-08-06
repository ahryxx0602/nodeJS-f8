const Course = require("../models/Course");

class SiteController {
  //[GET] /news
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  }

  //[GET] /news/:slug
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
