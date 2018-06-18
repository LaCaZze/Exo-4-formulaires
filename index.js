
const express = require('express')
var bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


app.post('/resultats', function (req, res) {
  var nombre1 = parseInt(req.body.nb1);
  console.log(nombre1);
  var nombre2 = parseInt(req.body.nb2);
  console.log(nombre2);

  res.end(nombre1 + nombre2 + "");

 
  })


app.listen(3000)
