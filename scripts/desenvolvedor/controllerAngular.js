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
    .otherwise({
      redirectTo: '/'
    });


});

app.controller('navegarApp', function ($scope, $location) {
  $scope.submit = function ($scope) {
    if ($scope == 'login') {
      
      $location.path('/login');
      
      let name = document.getElementById('input-usuario').value;
      let password = document.getElementById('input-senha').value;

      if (name != "" && password != "") {
        //alert( name + "\nLogin realizado com sucesso!!!");

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
    } else {
      $location.path('/');
      // document.location.reload(true);
    }
  }
});

app.controller('loginCtrt', function ($scope){

});