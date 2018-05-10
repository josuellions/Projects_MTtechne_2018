/* ROUTER */
var app = angular.module('controllerApp', ['ngRoute']);
app.config(function ($routeProvider) {

  var url = window.location.pathname;

  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html'
    })
    .when('/login', {
      templateUrl: '/views/login.html',
    })
    .when('/autenticar', {
      templateUrl: '/views/login.html',
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
      $location.path('/login');
     
      let name = document.getElementById('input-usuario').value;
      let password = document.getElementById('input-senha').value;

      if (name != "" && password != "") {
        document.getElementById('login-box-interna').style.display = "none";
        document.getElementById('login-box').innerHTML = '<h1 class="login-box-h1">Bem Vindo</h1>' +
          '<p class="login-box-p">' + name + '</p>' +
          '<a class="login-box-a" href="../index.html">Home</a>';
      } else {
        alert("\nUsuário e senha devem ser informados corretamente!!! ");
        $location.path('/login');
      }
    }
    else if ($scope == 'autenticar') {

      $location.path('/autenticar');

    } else if ($scope == 'comentario') {
      (function ($) {
        $("#enviarComentario").click(function () {

          var recebComentario = $("#txtComentario").val();
          if (typeof recebComentario == "string" && recebComentario != "") {
            document.getElementById('tabComentarios').innerHTML += '<tr><td width="20%">' + recebComentario +
              '</td><td width="2%"><a href="" id="10" onclick="onUpdate( 10 )"><span class="glyphicon glyphicon-edit"></span></a></td>' +
              '<td width="2%"><a href="" id=" 10" onclick="onDelete( 10 )"><span class="glyphicon glyphicon-trash"></span></a></td></tr>';

              document.getElementById("txtComentario").value = "";
              window.location.replace();
          }
          else {
            alert("Campo comentário, não pode ser vazio!")
          }
        });
      })(jQuery);

    } else {
      $location.path('/');
      window.location.reload();

    }
  }
});

app.controller('loginCtrt', function ($scope) {

});