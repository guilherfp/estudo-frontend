angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosApi, serialGenerator, $location, operadoras) {

  $scope.operadoras = operadoras.data;
  $scope.teste = '';

  $scope.adicionarContato = function (contato) {
    contato.serial = serialGenerator.generate();
    contatosApi.saveContato(contato).success(function (data) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $location.path("/contatos");
    });
  };

  $scope.algo = function(teste) {
    contatosApi.teste(teste);
  };

});