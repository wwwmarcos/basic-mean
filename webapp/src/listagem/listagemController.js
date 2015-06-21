myApp.controller("listagemController",  ["$scope", "listagem", "$http",  function ($scope, listagem, $http) {

	this.$inject = ['listagem'];

	$scope.getAlunos = getAlunos;
	$scope.excluiAluno = excluiAluno;
	getAlunos();

	function getAlunos() {
		$http.get("/app/listar")
		.success(function (data, status) {
			$scope.listaAlunos = data;
			//	console.log(data);
		})
		.error(function (data, status) {
			console.log("error", data);
		});
	};
	
	function excluiAluno(id) {
		$http.delete("/app/delete/" + id)
		.success(function (data, status) {
			getAlunos();
		})
		.error(function (data, status) {
			console.log("error", data);
		});
	};


}]);

