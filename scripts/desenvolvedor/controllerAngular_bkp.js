/* ROUTER */
var app = angular.module('controllerApp', ['ngRoute']);
app.config(function ($routeProvider) {

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
    .when('/saveComent', {
      templateUrl: 'views/home.html',
      controller: 'saveComent'
    })
    .when('/deletecoment/:id', {
      templateUrl: 'views/home.html',
      controller: 'deletecoment'
    })
    .when('/editcoment/:id', {
      templateUrl: 'views/home.html',
      controller: 'editcoment'
    })
    .when('/updatecoment/:id', {
      templateUrl: 'views/home.html',
      controller: 'updatecoment'
    })
    .otherwise({
      redirectTo: '/',
    });
});

app.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);

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
    }
    else if ($scope == 'autenticar') {

      $location.path('/autenticar');

    } else if ($scope == 'comentario') {

      var recebComentario = $("#txtComentario").val();

      if (typeof recebComentario == "string" && recebComentario != "") {
        /*
                document.getElementById('tabComentarios').innerHTML += '<tr><td width="20%">' + recebComentario +
                  '</td><td width="2%"><a href="" id="10" onclick="onUpdate( 10 )"><span class="glyphicon glyphicon-edit iconEdit""></span></a></td>' +
                  '<td width="2%"><a href="" id=" 10" onclick="onDelete( 10 )"><span class="glyphicon glyphicon-trash iconExcluir"></span></a></td></tr>';
        */
        //$("#txtComentario").val("");
        //$('#tbExemplo').css({ 'display': 'none' });


        /* POST */
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "http://21.21.21.5:3000/insertComent/",
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "379c18ec-b4a1-ac87-9982-a66e71783b20"
          },

          "data": // dataobj
            {
              "user": 1,
              "coment_user": recebComentario,
              "status_coment": 1,
            }

        }

        $.ajax(settings).done(function (response) {
          console.log(response);
        });

        $("#txtComentario").val("");
        //$location.path('/');
        window.location.reload('/');

        /* END POST */
      }
      else {
        alert("Campo comentário, não pode ser vazio!")
      }

    } else if ($scope == 'saveComent') {
      

      //$location.path('/saveComent');

      var recebId = $routeParams.id;
      var recebComentario = $("#txtComentario").val();

      if (typeof recebComentario == "string" && recebComentario != "") {

        /* POST */
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "http://21.21.21.5:3000/updatecoment/" + recebId,
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "379c18ec-b4a1-ac87-9982-a66e71783b20"
          },

          "data": // dataobj
            {
              "id": recebId,
              "coment_user": recebComentario,
            }

        }

        $.ajax(settings).done(function (response) {
         // console.log(response);
        });

        $("#txtComentario").val("");
        $('#saveComent').css({ 'display': 'none' });
        $('#enviarComentario').css({ 'display': 'inline' });
        //$location.path('/');
        //window.location.reload('/');
        $location.path('comentario');

        /* END POST */
      }
      else {
        alert("Campo comentário, não pode ser vazio!")
      }

    }
    else {
      $location.path('/');
    }
  }
});




app.controller('loginCtrt', function ($scope) {
});

/* Listar Comentarios trazidos do Banco Dados */
app.controller('listComentario', ['$scope', '$http', function ($scope, $http) {

  var vm = this;

  $scope.users;
  var baseUrl = 'http://21.21.21.5:3000/listComent/';

  $http.get(baseUrl).then(function (response) {
    vm.teams = response.data;
    $('#tbExemplo').css({ 'display': 'none' });
    $('html, body').animate({ scrollTop: $("table").height() }, 'slow');
  }, function (err) {
    console.log(err);
  });

}]);

/* injection */
/*
var id = function ($scope, $html) {
  id.$inject = ['$scope', 7];
}
*/
app.controller('deletecoment', function ($routeParams, $scope, $location) {
  var id = $routeParams.id;

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://21.21.21.5:3000/deletecoment/" + id,
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      "postman-token": "0b98c098-f446-197b-61e1-0f58eac1ca2b"
    }
  }

  $.ajax(settings).done(function (response) {
    //console.log(response);
  });

  //$("#txtComentario").val("");
  alert("Removido com sucesso")

  $location.path('comentario');
});

app.controller('editcoment', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  var id = $routeParams.id;

  // $('#enviarComentario').html('Salvar');
  // $('#enviarComentario').attr('ng-click', "submit('saveComent')").show();

  var baseUrl = 'http://21.21.21.5:3000/listComent/';

  $http.get(baseUrl).then(function (response) {
    response.data.forEach(item => {
      if (item.id == id) {
        //$location.path('/saveComent');
        $('#txtComentario').val(item.coment_user);
      }

      //document.getElementById('enviarComentario').style.display = 'none';
      //document.getElementById('saveComent').style.display = 'inline';

    });
  }, function (err) {
    console.log(err);
  });

  $('#enviarComentario').css({ 'display': 'none' });
  $('#saveComent').css({ 'display': 'inline' });

}]);

