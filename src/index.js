const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");

//Connect to db
db.connect();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Static file
app.use(express.static(path.join(__dirname, "public")));
//methodOverride
app.use(methodOverride("_method"));

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
//HTTP logger
// app.use(morgan("combined"));

//Template engine
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes Init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
