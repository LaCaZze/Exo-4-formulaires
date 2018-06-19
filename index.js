
const express = require('express')
var bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


app.post('/resultats', function (req, res) {
  var nombre11 = parseInt(req.body.num1);
  console.log(nombre11);
  var nombre22 = parseInt(req.body.num2);
  console.log(nombre22);

  res.end(nombre11 + nombre22 + "");

 
  })


app.listen(3000)
