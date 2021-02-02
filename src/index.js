const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const requests = require("requests");

const port = 3001

const templeteEnginePath = path.join(__dirname, "./templete/views");

const partialsPath = path.join(__dirname, "./templete/partials")

// to change the default directory name of "views"
app.set("views", templeteEnginePath)

// to set the view engine
app.set("view engine","hbs");

// partial path
hbs.registerPartials(partialsPath);

// templete engine route
app.get("/", (req, res) => {
  res.render("index", {
    firstName: "Rahul",
    lastName: "Singh"
  })
})

app.get("/about", (req, res) => {
  // console.log(req.query)
  res.render("about", {
    backend: "Express.Js",
    name: `${req.query.name}`
  })
})

// query string
// req.query
app.get("/temp", (req, res) => {
  requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=f59cdc275dca49ff46db04846afc3d48`)
  .on("data", (chunk) =>{
    const objData = JSON.parse(chunk);
    const arrData = [objData]
    console.log(`the current temperature in ${arrData[0].name}  is ${arrData[0].main.temp}`)
    res.write(`<h1>the current temperature in ${arrData[0].name}  is ${arrData[0].main.temp - 273.5}</h1>`)
    res.end()
  })
  .on("end",(err) => {
    if (err) throw err;
    res.end()
  })
})


// Error page

app.get("/about/*", (req, res) => {
  res.render("errorPage")
})

app.get("*", (req, res) => {
  res.render("errorPage")
})

// server
app.listen(port, () => {
  console.log("listening to port 3001")
})