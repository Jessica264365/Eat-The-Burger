const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files in the public folder
app.use(express.static("public"));

// Handlebars set up
app.engine(
  "handlebars",
  exphbs({ defaultLayout: "main", extname: "handlebars" })
);
app.set("view engine", "handlebars");

// Routes
require("./controllers/burgers_controller.js")(app);

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
