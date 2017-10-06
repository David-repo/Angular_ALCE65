// Controller de AngularJS en formato de AngularJS 1.2
// Aproximadamente segun la guía de estilos de John Papa

angular.module("appMain", [])
.controller("AppController", AppController)

// Inyectamos el scope unicamente para poder mostrarlo por consola
AppController.$inject = ['$scope'];
function AppController ($scope) {
    this.sTitulo = 'Curso de Angular JS y Bootstrap'; 
    this.sAutor = 'Alejandro Cerezo';

    console.log(this);
    console.log($scope);

    this.borrar = function() {
        this.inputNombre = '';         
        console.info("Se ha pulsado el botón");
        console.log(this);
    }
}






