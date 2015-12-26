(function(){
'use strict';
angular
  .module('AlunoCreateControllers',[])
  .config(config)
  .controller('AlunoCreateController', AlunoCreateController);

  function config($stateProvider){
    $stateProvider
      .state('app.aluno-create',{
        url : '/aluno/create',
        templateUrl: 'src/matricula/aluno/aluno-create.html',
        controller : 'AlunoCreateController',
        controllerAs : 'vm'
      });
  };

  AlunoCreateController.$inject = ['$state','AlunoService'];
  function AlunoCreateController($state, AlunoService){
    var vm = this;

    vm.save = save;

    function save(){
      var aluno = {
        nome : vm.aluno.nome,
        curso : vm.aluno.curso,
      }

      AlunoService
        .alunoCreate(aluno)
        .then(AlunoCreateSuccess);
    }

    function AlunoCreateSuccess(response){
      $state.reload();
    }
  }
}());