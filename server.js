const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/clinics', function (req, res) {
    console.log("go to clinics web page...");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.get('/login', function (req, res) {
  console.log("go to login page...");  
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, ()=> {
  console.log(`server listen on port ${process.env.PORT || 5000}...`);
});