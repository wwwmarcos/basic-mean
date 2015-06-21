myApp.controller("cadastroController",  ["$stateParams","$scope", "cadastro", "$http",  function ($stateParams, $scope, cadastro, $http) {

	this.$inject = ['cadastro'];
	
	$scope.cadastrar = cadastrar;

	function cadastrar() {
		$http.post('/app/cadastrar', $scope.usuario)
		.success(function (data, status) {
			$scope.usuario = {};
		})
		.error(function (data, status) {
			console.log("error", data);
		});
	}

}]);

