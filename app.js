"use strict";
const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/ibrahem", (req, res) => {
  res.json({
    name: "ibrahem alomari",
    email: "ibrahem.omari96@gmail.com",
  });
});
app.get("/ahmad", (req, res) => {
  res.json({
    name: "Ahmad Nofal",
    email: "anofal719@gmail.com",
  });
});
app.get("/osama", (req, res) => {
  res.json({
    name: "Osama Almomani",
    email: "osama@gmail.com",
  });
});
app.get("/qusai", (req, res) => {
  res.json({
    name: "Qusai Alqaisi",
    email: "qusai.lqaisi@gmail.com",
  });
});
app.get("/thaer", (req, res) => {
  res.json({
    name: "Thaer Braizat",
    email: "thaer.braizat@gmail.com",
  });
});
app.get("/hasan", (req, res) => {
  res.json({
    name: "Hasan Baydoun",
    email: "hasan.baydoun@gmail.com",
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("the server is running on port 8000");
});
