# Projects_MTtechne_2018

Desenvolvedor / Programador : Josuel A. Lopes
Fone: 11 98273-8274

  "name": "projectsmttechne",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/josuellions/Projects_MTtechne_2018.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/josuellions/Projects_MTtechne_2018/issues"
  },
  "homepage": "https://github.com/josuellions/Projects_MTtechne_2018#readme",
  "dependencies": {
    "angular": "^1.6.9",
    "body-parser": "^1.16.1",
    "cors": "^2.7.1",
    "express": "^4.13.4",
    "json": "^9.0.6",
    "mysql": "^2.15.0",
    "node": "^10.0.0",
    "node-env-file": "^0.1.8",
    "nodejs": "^4.2.6",
    "nodemon": "^1.17.4",
    "sax": "^1.2.4"
    "bootstrap": "^3.3.7"
    "jQuery": "^3.3.1"

    # Ferramentas utilizadas
    npm => controle e versionamento de dependências
    nodemon =>  servidor local desenvolvimento para conexão banco dados
    http-server ou node => emulador de servidor da web carregar paginas 
    IDES => codificação Sublime ou Visual Code
    Trello => gerenciamento do andamento dos processos desenvolvimento do projeto
    node_module => instalação realizada através do npm

    #Linguagens
    HTML5
    CSS3 -> BootStrap
    JavaScript -> JQuery, NodeJs, AngularJs
    MySql -> Banco Dados
    
    #Processo 
    Analise do escopo do projeto
    prototipo e design
    Acessibilidade e arquitetura
    Codificação
    Repositorio e versionamento - GIT
    Hospedagem -AWS
    Deployment

    #Estrutura
    *\ project
        |-> img => repositório das imagens usadas no projeto
        |-> node_modules => bibliotecas e dependências do projeto 
        |-> scripts => repositório dos scripts JavaScript e libs
          |-> desenvolvedor => repositório JS em desenvolviemto não linear e não mimificado
            |-> acessBD.js => instruções de conexão e acesso ao banco dados com base nas regras de negocio e escopo do projeto.
            |-> controllerAngular.js => controlador que cuida e recebe requisições da web ou navegador, camada que decide quais model, views  ou ação devem ser tomados ou receber reposta, camada que faz o 			link com todas outra camadas.
            |-> enviarComentario.js => controller que realiza ação de captura dados da view e enviar para model que acessa banco dados para salva.
            |-> listarComentarios.js => controller responsavel pela ação de acessar model de acesso ao banco e passar para view para exibir listagem dos dados solicitados, escrevendo na view conforme 		determinado pelo desenvolvedor ou escopo do projeto.
            |-> login.js => controller responsavel por validar os campos da view de login e repassar para model de acesso ao banco de dados para validação.
          |-> libs => repositório dependências e framewoks JS utilizadas no projeto 
          |-> producao => repositório JS em desenvolviemto linear e mimificado
        |-> styles => repositório dos estilos e formatações do HTML
          |-> desenvolvedor => repositório CSS em desenvolviemto não linear e não mimificado
            |-> custom.css => responsável pela formatação das views, tais com tags, class, font, estilo, alinhamentos de objetos e itens, customização em conjunto com framework do Bootstrap.
            |-> customLogin.css => responsável pela customização da view de login.
          |-> libs => repositório dependências e framewoks CSS utilizadas no projeto 
          |-> producao => repositório CSS em desenvolviemto linear e mimificado
        |-> views => repositorio dos layout de páginas
          |-> home.html => view parcial, que é carregada na index.html de layout principal, responsável por exibir página inicial, com imagens, listagem e campo para inserir e enviar comentario.
          |-> login.html => view parcial, que é carregada na index.html de layout principal, responsável por exibir formulario de insert dados do usuario para login.
        |-> index.html => layout principal e página inical do projeto, com view que recebera as demais views e páginas, com cabeçalho, menu e rodapé padronizados.
        |-> package.json => arquivo de controle de versionamento e dependências do projeto
        |-> Readme.md => documentação e procedimentos adotados no processo desenvolvimento

