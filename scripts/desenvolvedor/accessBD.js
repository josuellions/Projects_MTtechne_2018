var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  //properties
  host: 'server',
  user: 'user',
  password: '******',
  database: 'banco dados'
});

var app = express();


connection.connect(function (error){
  if(!error){
    console.log('Success is Conected!');
  }else {
    console.log('Error is connected!', error);
  }
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/home', function (req, res){
  var sql = 'SELECT * FROM `table`;';
  connection.query(sql, function (err, rows, fields) {
    if(err){
      res.json({ 'Error': 'Erro ao listar os dados na tabela' });
    }else{
      res.json(rows);
    }
  });
  return sql;
});

app.listen( 3000 );



