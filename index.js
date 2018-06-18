
const express = require('express')
var bodyParser = require("body-parser");
const app = express()


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


app.post('/resultats', function (req, res) {
  console.log(req.params)
    // var nombre1 = req.body.nb1
    console.log(req.body)
    // var nb1 = req.post.nb1;
    // console.log(nb1);
    // var nb2 = req.params(entree2);
    // console.log(nb2);

    // res.end(nb1 + nb2 + "");

 
  })


app.listen(3000)
