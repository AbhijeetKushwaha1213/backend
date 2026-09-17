const express = require('express');

//import express from "express",above and this both are same jusr the style of javascript,like comman js  or modul js 

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});