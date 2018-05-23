/* ROUTER */
var app = angular.module('controllerApp', ['ngRoute']);
app.config(function ($routeProvider) {

  var url = window.location.pathname;

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'listComentario'
      //controller: 'loginCtrt'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
    })
    .when('/autenticar', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrt',
    })
    .when('/comentario', {
      templateUrl: '/views/home.html'
    })
    .when('/deleteComent/:id', {
      templateUrl: 'views/home.html',
      controller: 'deleteComent'
    })
    .when('/editComent/:id',{
      templateUrl: 'views/home.html',
      controller: 'editComent'
    })
    .when('/updateComent', {
      templateUrl: 'views/home.html',
      controller: 'updateComent'
    })
    .otherwise({
      redirectTo: '/',
    });
});
/*
app.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);
*/
/* CONTROLLERS */
app.controller('navegarApp', function ($routeParams, $scope, $location, $http) {
  $scope.submit = function ($scope) {

    if ($scope == 'login') {

      $('MenuRight').css({ 'display': 'none !imporant' });
      $location.path('login');

      let name = document.getElementById('input-usuario').value;
      let password = document.getElementById('input-senha').value;

      if (name != "" && password != "") {
        document.getElementById('login-box-interna').style.display = "none";
        document.getElementById('login-box').innerHTML = '<h1 class="login-box-h1">Bem Vindo</h1>' +
          '<p class="login-box-p">' + name + '</p>' +
          '<a class="login-box-a" href="../index.html">Home</a>';
      } else {
        alert("\nUsuário e senha devem ser informados corretamente!!! ");
        $location.path('login');
      }

    } else if ($scope == 'autenticar') {

      $location.path('/autenticar');

    } else if ($scope == 'comentario') {

      var recebComentario = $("#txtComentario").val();

      if (typeof recebComentario == "string" && recebComentario != "") {

        //insertComent (recebComentario); 
        //        $location.path('/insertComent')

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "http://21.21.21.5:3000/insertComent/",
          "method": "POST",
          "header": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "0ff7ed15-2273-2cda-bb6f-e874216a0ecc"
          },
          "data": {
            "user": "1",
            "coment_user": recebComentario,
            "status_coment": "1"
          }
        }

        $.ajax(settings).done(function (response) {
          //console.log(response);
        });

        $("#txtComentario").val("");
        $('#tbExemplo').css({ 'display': 'none' });
        $location.path('#!/cometario');
        //window.location.replace('/');

      }
      else {
        alert("Campo comentário, não pode ser vazio!")
      }
    } else if ($scope == 'editcoment') {

      console.log('aqui');
    } else {
      $location.path('/');
    }
  }
});

app.controller('loginCtrt', function ($scope) {
});

//DELETAR ITEM DA TABELA BANCO DADOS
app.controller('deleteComent', function ($routeParams, $scope, $location) {

  var id = $routeParams.id;

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://21.21.21.5:3000/deleteComent/" + id,
    "method": "POST",
    "header": {
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      "postman-token": "32845f2a-5fdf-d0ac-09c9-5431da5be93a"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  $.ajax(settings).done(function (response) {
    //    console.log(response);
  });

  $location.path('cometario');
});

//EDITAR COMENTàRIO
app.controller('editComent', function ($routeParams, $scope, $http, $location) {
  var id = $routeParams.id;
  
  var baseUrl = 'http://21.21.21.5:3000/listComent/';

  $http.get(baseUrl).then(function(response){
    response.data.forEach(item => {
     if( item.id == id ) {
        $('#txtComentario').val(item.coment_user)
        $('#enviarComentario').html('Salvar');
       $('#enviarComentario').attr({ 'name': 'salvarComentario', 'id': 'salvarComentario', "ng-click": "submit('updateComent')"});
      }
    });
  }, (err) => { console.log(err); });
});

//UPDATE COMENTÁrio
app.controller('updateComent', function ($routeParams, $scope, $http, $location){
  console.log("aqui")
});
//LISTAR COMENTÀRIOS
app.controller('listComentario', ['$scope', '$http', function ($scope, $http) {

  var vm = this;

  $scope.users;
  var baseUrl = 'http://21.21.21.5:3000/listComent/';

  $http.get(baseUrl).then(function (response) {
    vm.teams = response.data;
    $('#tbExemplo').css({ 'display': 'none' });
  }, function (err) {
    console.log(err);
  });

}]);






//lOGIN AUTENTICADO
//let autenticalogin = () => {

//}

//INSERT COMENTARIO
//let insertComent = (recebComentario ) => {
   /*
  document.getElementById('tabComentarios').innerHTML += '<tr><td width="20%">' + recebComentario +
    '</td><td width="2%"><a href="" id="10" onclick="onUpdate( 10 )"><span class="glyphicon glyphicon-edit iconEdit""></span></a></td>' +
    '<td width="2%"><a href="" id=" 10" onclick="onDelete( 10 )"><span class="glyphicon glyphicon-trash iconExcluir"></span></a></td></tr>';
  */


//app.controller('insertComent', ['$scope', '$http', '$location', function($scope, $http, $location){


//}]);
//}