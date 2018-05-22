var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  //properties
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'agenda'
});

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));

connection.connect(function (error) {
  if (!error) {
    console.log('Success is Conected! \n\n');
  } else {
    console.log('Error is connected! \n\n', error);
  }
});


app.post('/insertComent', function (req, res) {
  //connection.connect();
  //var recebComent = "teste insert"; // $('#txtComentario').val();
  //  var user = name ;// "josuel";
  //  var sh = sh; //"123456";
  var data = req.body;
  console.log("aqui", data.username,
    "\n", data.password);

  usuario = data.username;
  senha = data.password;


  var sql = 'INSERT INTO `usuarios` SET `usuario, senha` VALUES  ? ?;', usuario, senha;
  connection.query('INSERT INTO usuarios SET usuario, senha VALUES  ? ?;', usuario, senha,
    function (err, result, fields) {
      if (err) throw err;
      else
        console.log('Sucesso \n\n');
      console.log(result);

      return "Cadastro realizado \n\n";
    });
});