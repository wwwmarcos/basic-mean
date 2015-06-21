myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
    .state('home', {
      url: "/",
    })

    .state('cadastro', {
      url: '/cadastro',
      templateUrl: 'src/cadastro/cadastro.html',
      controller: 'cadastroController'
    })

    .state('editar', {
      url: '/editar/:_id',
      templateUrl: 'src/editar/editar.html',
      controller: 'editarController'
    })

    .state('listagem', {
      url: '/listagem',
      templateUrl: 'src/listagem/listagem.html',
      controller: 'listagemController'
    })

    $urlRouterProvider.otherwise("/");
});