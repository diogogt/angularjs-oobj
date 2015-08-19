/**
 * Created by Diogo on 18/08/2015.
 */
angular.module('oobj-directives')
    .directive('oobjInputText', oobjInputText);

oobjInputText.$inject = ['rootScope'];

function oobjInputText() {
        return {
            restrict: 'E',
            template: 'app/directives/text-input/text-input.html',
            scope: {
                ngModel: '=',
                ngDisable: '=?',
                ngRequired: '=?',
                label:'@'
            },
            link: function($scope, element, attrs){
                $scope.classInputText = 'col-sm-3';

                if(angular.isDefined($scope.colSpan)){
                    $scope.classInputText = 'col-sm-' + $scope.colSpan;
                }
            }
        }
};
