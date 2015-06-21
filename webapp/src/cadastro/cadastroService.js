(function (){
	myApp.service('cadastro', cadastro);

	function cadastro($http) {
		this.mostra = mostra;
		
		function mostra(valor1){
			console.log(valor1);
		} 

	}
}());