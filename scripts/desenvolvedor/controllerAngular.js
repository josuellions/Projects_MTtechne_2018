/* ROUTER */
var app = angular.module('controllerApp', ['ngRoute']);
app.config(function ($routeProvider) {

  var url = window.location.pathname;

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'loginCtrt'
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
    .otherwise({
      redirectTo: '/',
    });
});

/* CONTROLLERS */
app.controller('navegarApp', function ($scope, $location) {
  $scope.submit = function ($scope) {
    if ($scope == 'login') {
      $('MenuRight').css({'display': 'none !imporant'});
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
    }
    else if ($scope == 'autenticar') {

      $location.path('/autenticar');

    } else if ($scope == 'comentario') {

      var recebComentario = $("#txtComentario").val();

      if (typeof recebComentario == "string" && recebComentario != "") {
        document.getElementById('tabComentarios').innerHTML += '<tr><td width="20%">' + recebComentario +
          '</td><td width="2%"><a href="" id="10" onclick="onUpdate( 10 )"><span class="glyphicon glyphicon-edit iconEdit""></span></a></td>' +
          '<td width="2%"><a href="" id=" 10" onclick="onDelete( 10 )"><span class="glyphicon glyphicon-trash iconExcluir"></span></a></td></tr>';

        $("#txtComentario").val("");
        $('#tbExemplo').css({ 'display': 'none' });
      }
      else {
        alert("Campo comentário, não pode ser vazio!")
      }
    }  else {
      $location.path('/');
    }
  }
});

app.controller('loginCtrt', function ($scope) {
});

app.controller('listComentario',['$scope', '$http', function($scope, $http) {

  var vm = this;

  $scope.users;
  var baseUrl = 'http://server:3000/home/';
  
  $http.get(baseUrl).then(function (response) {
    vm.teams = response.data;
    $('#tbExemplo').css({ 'display': 'none' });
  }, function (err) {
    console.log(err);
  });

}]);