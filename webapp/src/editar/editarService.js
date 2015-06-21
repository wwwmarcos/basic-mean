(function (){
	myApp.service('editar', editar);

	function editar($http) {
		this.mostra = mostra;
		
		function mostra(valor1){
			console.log(valor1);
		} 

	}
}());