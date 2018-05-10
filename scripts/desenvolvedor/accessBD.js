var express = require('express');
var mysql = require('mysql');
//var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  //properties
  host: 'server',
  user: 'user',
  password: '*****',
  database: 'banco dados'
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
  connection.query("SELECT * FROM table;", function(error, rows, fields) {
    if(!error){
      console.log('Successfull query!\n');
      console.log( res.json(rows));
    }else{
      console.log('Error in the query!', error);
    }
  });
});
console.log("aqui");
app.get('/home', function (req, res){
  var sql = 'SELECT * FROM table;';
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
  var sql = 'SELECT * FROM table;';
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



