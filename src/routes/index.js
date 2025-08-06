const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter); // Luôn để dưới cùng
}

module.exports = route;
