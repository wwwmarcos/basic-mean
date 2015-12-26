(function(){
'use strict';
  angular
    .module('AlunoServices',[])
    .factory('AlunoService', AlunoService);

  AlunoService.$inject = ['$http'];

  function AlunoService($http){
    var service = this;
    service.alunoCreate = alunoCreate;
    service.getAllAlunos = getAllAlunos;
    service.deleteAluno = deleteAluno;
    service.getAlunoById = getAlunoById;
    service.editAluno = editAluno;
    return service;

    function alunoCreate(aluno){
      var method = 'POST'
      	,	url = '/app/cadastrar';
      return $http({
        url : url,
        method : method,
        data : aluno
      }).then(function(response){
        return response;
      });
    }

    function getAllAlunos(){
      var method = 'GET'
        , url = '/app/listar';
      return $http({
        url : url,
        method : method
      }).then(function(response){
        return response;
      });
    }

    function getAlunoById(id){
      var method = 'GET'
        , url = '/app/listarById/' + id;
      return $http({
        url : url,
        method : method
      }).then(function(response){
        return response;
      });
    }

    function deleteAluno(id){
      var method = 'DELETE'
        , url = '/app/delete/' + id;
      return $http({
        url : url,
        method : method
      }).then(function(response){
        return response;
      });
    }

    function editAluno(aluno){
      var method = 'PUT'
        , url = '/app/editar/';
      return $http({
        url : url,
        method : method,
        data : aluno
      }).then(function(response){
        return response;
      });
    }
  }
}());
