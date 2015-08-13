/**
 * Created by Diogo on 10/08/2015.
 */
angular.module('helloWorldApp', [])
    .controller('HelloWorldController', HelloWorldController);

    /**
.controller('HelloWorldController', ['$scope', function($scope){
    $scope.nome='Diogo';
}]);
     */

    /**mais limpo */

    HelloWorldController.$inject = ['$scope']
function HelloWorldController($scope){
    $scope.nome='Diogo';

    $scope.imprimirNome = function(){
        alert($scope.nome);
    };

    $scope.myStyle = {};
    $scope.myClass = {};
    $scope.myStyle.width = '100px';
    $scope.myStyle.height = '100px';

    $scope.$watch('nome', function(newValue, oldValue){

        if(newValue == oldValue){
            return;
        }

        if(angular.isDefined(newValue) && newValue == 'oobj'){
            $scope.myStyle.backgroundColor = 'green';

            $scope.myClass = 'blue';
        } else {
            $scope.myStyle.backgroundColor = 'yellow';

            $scope.myClass = 'red';
        }
    });
}