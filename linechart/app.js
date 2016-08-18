const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/d', function (req, res) {
  res.sendFile(__dirname + '/demo/lindex.html');
});

app.get('/r', function (req, res) {
  res.sendFile(__dirname + '/mytest/index.html');
});

app.get('/nvd3', function (req, res) {
  res.sendFile(__dirname + '/nvd3/index.html');
})

app.listen(3000);

console.log('server listening on 3000');