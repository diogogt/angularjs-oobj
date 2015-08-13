angular.module('helloWorldApp')
    .controller('BootstrapController', function($scope, $growl){
        $scope.pessoa = {};
        $scope.pessoa.nome = '';
        $scope.pessoa.sobrenome = '';
        $scope.pessoa.dataNascimento = '';
        $scope.pessoa.sexo = '';

        $scope.pessoas = [];

        $scope.msgValidacao = undefined;

        $scope.salvar = function(){
            if($scope.myForm.$invalid) {
                $growl.box("Atenção", "Erros encontrados no formulário.", {
                    class: 'warning',
                    timeout: 4000
                }).open();

                return;
            }

            $growl.box("Ok", "Registro salvo com sucesso", {
                class: 'sucess',
                timeout: 4000
            }).open();

            $scope.pessoas.push($scope.pessoa);

            $scope.limpar();
        }

        $scope.limpar = function(){
            $scope.pessoa = {};
            $scope.myForm.$pristine = true;
        }

        $scope.excluir = function(){
            $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa),1);

            $scope.limpar();
        }

        $scope.editar = function(pessoa){
            $scope.pessoa = pessoa;
        }
    });