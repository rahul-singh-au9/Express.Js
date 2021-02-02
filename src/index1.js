const express = require("express");
const path = require("path");

const app = express();

// serving static file in express
const staticPath = path.join(__dirname, "../public")
// console.log(staticPath)

// built middleware function in express
app.use(express.static(staticPath));

// app.get(route, callback)
app.get("/", (req, res) => {
  res.send("<h1> hello world ! EXPRESS </h1>")
})

app.get("/about", (req, res) => {
  res.send("About Express!")
})

app.get("/contact/1", (req, res) => {
  res.send("contact id 1")
})

app.get("/contact/2", (req, res) => {
  res.send("contact id 2")
})

app.get("/contact", (req, res) => {
  res.send("Contact page, Express!")
})

app.get("/feedback", (req, res) => {
  res.write("<h1> please give your valueable feedback </h1>")
  res.send()
})

app.get("/api", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Rahul"
    },
    {
      id: 2,
      name: "Joy"
    },
    {
      id: 3,
      name: "Kabir"
    }
  ])
})

app.get("/json", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Rahul"
    },
    {
      id: 2,
      name: "Joy"
    },
    {
      id: 3,
      name: "Kabir"
    }
  ])
})

// the callback function has 2 parameters, req(request) and res(response).
// the request object (req) represents the HTTP request and has properties for the request query using string, parameters, body, HTTP headers, etc.

// Similarly, the response object represent the HTTP response that the express app sends when it receives an HTTP request

app.listen(3001, () => {
  console.log("listening port 3001")
})

// API (CRUD)
// post - create
// get - read
// put - update
// delete - delete