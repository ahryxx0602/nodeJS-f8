const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter); // Luôn để dưới cùng
}

module.exports = route;
