/**
 * Created by Diogo on 18/08/2015.
 */
angular.module('oobj-directives')

    .directive('helloWorld', function() {
        return {
            restrict: 'E',
            template: '<h1>Olá mundo... Essa é minha primeira directiva'
        };
    });
