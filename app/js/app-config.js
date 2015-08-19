/**
 * Created by Diogo on 10/08/2015.
 */
angular.module('helloWorldApp', ['ngMessages', 'ui.growl','ui.grid','ui.grid.resizeColumns',
    'ui.grid.selection', 'ngMaterial', 'ui.router', 'oobj-directives'])

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