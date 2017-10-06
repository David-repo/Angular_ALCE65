// Controller de AngularJS en formato de AngularJS 1.5
// Aproximadamente segun la guía de estilos de Todd Motto
// que emplea ES6

class AppController  {

    // Inyectamos el scope unicamente para poder mostrarlo por consola
    // como parte del objeto controller (i.e. this)
    constructor ($scope) {
        this.$scope = $scope;
    }

    $onInit () {
        this.sTitulo = 'Curso de Angular JS y Bootstrap'; 
        this.sAutor = 'Alejandro Cerezo';

        console.log(this);
    }
   
    borrar () {
        this.inputNombre = '';         
        console.info("Se ha pulsado el botón");
        console.log(this);
    }
}

angular.module("appMain")
.controller("AppController", AppController)







