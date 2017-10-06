// Controller de AngularJS en formato original
// anterior a AngularJS 1.2

angular.module("appMain", [])
.controller("AppController", [ '$scope', function ($scope) {
    $scope.sTitulo = 'Curso de Angular JS y Bootstrap'; 
    $scope.sAutor = 'Alejandro Cerezo';

    console.log($scope);

    $scope.borrar = function() {
        $scope.inputNombre = '';         
        console.info("Se ha pulsado el botón");
        console.log($scope);
    }

}])


