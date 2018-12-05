const express = require("express");
const app = express();
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(`${__dirname}/public`));

hbs.registerHelper("getFullYear", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});
//routes;
let people = [
  { name: "Maslah", city: "Kuala lumpur" },
  { name: "Hawo", city: "Burco" },
  { name: "Ali", city: "Dharjaale" }
];
app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Home Page",
    welcomeMsg: "Welcome to my page",
    people
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About Page"
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//use is mildlerware
//set you set configaration (key, value)
//get and post are routes
//listen open server
