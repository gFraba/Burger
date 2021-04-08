const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

// access to static content
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});