(function (){ 
 'use strict' 
app 
  .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
function config($stateProvider, $urlRouterProvider, $httpProvider) {
  //$httpProvider.interceptors.push('HttpInterceptor');
  $stateProvider
    .state('app', {
      abstract: true,
      resolve: {
        resolve : function(){
            return {};
        },
      },
      controller: controller,
      template: '<ui-view/>'
    })


  controller.$inject = ['$rootScope', '$state'];
  function controller($rootScope, $state) {
  
  }

  $urlRouterProvider.otherwise('/');

}
}());