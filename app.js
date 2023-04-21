const express = require("express");

const path = require("path");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();

const authRoutes = require("./routes/auth");



// app.use(bodyParser.urlencoded());   // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/auth", authRoutes);
app.get("/",(req,res)=>{
    res.send("welcome to new page");
})

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});


const complaintRouter = require('./routes/complaint')
app.use(complaintRouter)

mongoose
  .connect(
    "mongodb+srv://ranakagrawal:College123@college-work.j27dolr.mongodb.net/?retryWrites=true&w=majority",
  )
  .then((result) => {
    console.log("Connected!");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
