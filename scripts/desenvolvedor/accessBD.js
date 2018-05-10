var express = require('express');
var mysql = require('mysql');
//var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  //properties
  host: 'seu servidor bd',
  user: 'urer',
  password: '######',
  database: 'banco'
});

var app = express();
//app.use(bodyParser.urlencoded({ extended: false }));

connection.connect(function (error){
  if(!error){
    console.log('Success is Conected!');
  }else {
    console.log('Error is connected!', error);
  }
});

app.get('/index', function(req, res){
  // about mysql
  connection.query("SELECT * FROM ent_desp;", function(error, rows, fields) {
    if(!error){
      console.log('Successfull query!\n', res.json(rows));
    }else{
      console.log('Error in the query!', error);
    }
  });
});

app.get('/home', function (req, res){
  var sql = 'SELECT * FROM `ent_desp`;';
  connection.query(sql, function (err, rows, fields) {
    if(err){
      res.json({ 'Error': 'Erro ao listar os dados na tabela', 'sql': sql });
    }else{
      res.json(rows);
    }
  });
  return sql;
});

/*SELECT LOGIN */
app.get('/login', function (req, res) {
  var sql = 'SELECT * FROM `usuarios`;';
  connection.query(sql, function (err, rows, fields) {
    if (err) {
      res.json({ 'Error': 'Erro ao listar os dados na tabela', 'sql': sql });
    } else {
      res.json(rows);
    }
  });
  return sql;
});

app.listen( 3000 );



