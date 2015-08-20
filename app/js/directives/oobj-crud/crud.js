/**
 * Created by Diogo on 19/08/2015.
 */
angular.module('oobj-directives')
    .directive('oobjCrud', oobjCrud);

function oobjCrud($rootScope){
    return {
        restrict: 'E',
        templateUrl: 'app/js/directives/oobj-crud/crud.html',
        transclude: true,
        scope:{
            titulo:'@',
            acaoSalvar: '&',
            acaoExcluir: '&',
            acaoLimpar: '&'
        },
        link: function($scope, element, attrs){
            $scope.salvar = function () {
                if(acaoSalvar.isFunction($scope.acaoSalvar)){
                    $scope.acaoSalvar();
                }
            };

            $scope.excluir = function () {
                if(acaoSalvar.isFunction($scope.acaoExcluir)){
                    $scope.acaoExcluir();
                }
            };

            $scope.limpar = function () {
                if(acaoSalvar.isFunction($scope.acaoLimpar)){
                    $scope.acaoLimpar();
                }
            };
        }
    }
}