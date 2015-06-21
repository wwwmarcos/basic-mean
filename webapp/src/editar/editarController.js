myApp.controller("editarController",  ["$location","$stateParams","$scope", "editar", "$http",  function ($location, $stateParams, $scope, editar, $http) {

	this.$inject = ['editar'];
	
	$scope.editar = editar;
	$scope.getAlunosById = getAlunosById;

	getAlunosById($stateParams._id);
	
	function editar() {
		$http.put("/app/editar", $scope.usuario)
		.success(function (data, status) {
			$location.path("/listagem");
			$scope.usuario = {};
		})
		.error(function (data, status) {
			console.log("error", data);
		});
	}

	function getAlunosById(id) {
		$http.get("/app/listarByid/" + id)
		.success(function (data, status) {
			$scope.usuario = data;
		})
		.error(function (data, status) {
			console.log("error", data);
		});
	};

}]);

