var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');


var connection = mysql.createConnection({
  //properties
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'bd_comentarios'
});

//var app = express();

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json()); // support json encoded bodies
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//TESTA CONEXÃO COM SERVIDOR
connection.connect(function (error) {
  if (!error) {
    console.log('Success is Conected!');


    //HABILITA REQUEST DE PAGINA
    //app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    //  res.header("Access-Control-Allow-Credentials", "true");
    //  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers")
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //  next();
    // });

    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
      next();
    });

    //INSERT COMENTÁRIO BANCO DADOS
    app.post('/insertComent', function (req, res) {
      var data = req.body;
      var receb = {
        user: data.user,
        coment_user: data.coment_user,
        status_coment: data.status_coment
      }

      if (!receb.coment_user == "") {
        var postData = req.body;
        connection.query('INSERT INTO tb_comentarios SET ?;', postData, function (error, results, fields) {
          if (error) throw error;
          res.end(JSON.stringify(results));
        });
      }
      else {
        console.log("Campo não pode ser vazio!")
      }

      //connection.end();

    });

    //DELETAR CONTEÚDA TABELA 
    app.post('/deleteComent/:id', function (req, res) {
      var dataId = req.params.id;

      var sql = 'DELETE FROM tb_comentarios WHERE id = ?;';
      connection.query(sql, [dataId], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
      });
      //return;
    });

    //UPDATE CONTEÚDO DA TABELA
    app.post('/updateComent/:id', function (req, res) {
      var dataId = req.params.id;
      var dataComent = req.body.coment_user;

      if (dataId != "" && dataComent != "") {

        var sql = 'UPDATE tb_comentarios SET coment_user = ? WHERE id = ? ;';
        connection.query(sql, [dataComent, dataId], function (err, rows, fields) {
          res.json(rows);
        })
      }
    });


    //LISTA CONTEÚDO DA TABELA
    app.get('/listComent', function (req, res) {
      var sql = 'SELECT * FROM `tb_comentarios`;';
      connection.query(sql, function (err, rows, fields) {
        if (err) {
          res.json({ 'Error': 'Erro ao listar os dados da tabela' });
        } else {
          res.json(rows);
        }
      });

      return sql;
      //connection.end();

    });

  } else {
    console.log('Error is connected!', error);
  }

});

app.listen(3000);




