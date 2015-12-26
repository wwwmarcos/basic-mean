(function(){
'use strict';
angular
  .module('AlunoEditControllers',[])
  .config(config)
  .controller('AlunoEditController', AlunoEditController);

  config.$inject = ['$stateProvider'];
  function config($stateProvider){
    $stateProvider
      .state('app.aluno-edit',{
        url : '/aluno/edit/:id',
        templateUrl: 'src/matricula/aluno/aluno-create.html',
        controller : 'AlunoEditController',
        controllerAs : 'vm',
        resolve : {
        	alunoPreService : alunoPreService 
        }
      });

      alunoPreService.$inject = ['AlunoService', '$stateParams'];
      function alunoPreService(AlunoService, $stateParams){
      	var id = $stateParams.id;
      	return AlunoService.getAlunoById(id);
      }
  };

  AlunoEditController.$inject = ['$state','AlunoService', 'alunoPreService'];
  function AlunoEditController($state, AlunoService, alunoPreService){
    var vm = this;
    vm.aluno = alunoPreService.data;
    vm.save = save;

    function save() {
      AlunoService
        .editAluno(vm.aluno)
        .then(AlunoEditSuccess);
    }

    function AlunoEditSuccess(response){
      $state.go('app.aluno-list');
    }
  }
}());