(function (){
	myApp.service('listagem', listagem);

	function listagem($http) {
		this.mostra = mostra;
		
		function mostra(valor1){
			console.log(valor1);
		} 

	}
}());