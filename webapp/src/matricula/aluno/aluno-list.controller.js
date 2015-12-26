(function(){
'use strict';
angular
  .module('AlunoListControllers',[])
  .config(config)
  .controller('AlunoListController', AlunoListController);

  config.$inject = ['$stateProvider'];
  function config($stateProvider){
    $stateProvider
      .state('app.aluno-list',{
        url : '/aluno/list',
        templateUrl: 'src/matricula/aluno/aluno-list.html',
        controller : 'AlunoListController',
        controllerAs : 'vm',
        resolve : {
        	alunoPreService : alunoPreService 
        }
      });

      alunoPreService.$inject = ['AlunoService'];
      function alunoPreService(AlunoService){
      	return AlunoService.getAllAlunos();
      }
  };

  AlunoListController.$inject = ['$state','AlunoService', 'alunoPreService'];
  function AlunoListController($state, AlunoService, alunoPreService){
    var vm = this;
    vm.alunos = alunoPreService.data;
    vm.deleteAluno = deleteAluno;
    vm.edit = edit;

    function deleteAluno(id) {
      AlunoService
        .deleteAluno(id)
        .then(AlunoDeleteSuccess);
    }

    function edit(id) {
    	$state.go('app.aluno-edit', {id : id})
    }

   function AlunoDeleteSuccess(response){
      $state.reload();
    }
  }
}());