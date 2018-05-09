document.getElementById('button-login').onclick = () => {
  
  let name = document.getElementById( 'input-usuario').value;
  let password = document.getElementById( 'input-senha').value;

  if( name != "" && password != "") {
    //alert( name + "\nLogin realizado com sucesso!!!");

    document.getElementById('login-box-interna' ).style.display = "none";
    document.getElementById('login-box').innerHTML = '<h1")>Bem Vindo</h1>' +
                                                      '<p">' + name + '</p>' +
                                                      '<a" href="../index.html">Home</a>';
  } else {
    alert( "\nUsuário e senha devem ser informados corretamente!!! " );
  }
};