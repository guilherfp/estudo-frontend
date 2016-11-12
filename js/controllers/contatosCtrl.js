angular.module("listaTelefonica").controller("contatosCtrl", function ($scope, contatosApi, serialGenerator, contatos) {

  $scope.app = "Lista Telefônica";
  $scope.contatos = contatos.data;
  var counter = 0;

  var init = function () {
    generateSerial($scope.contatos);
    gerarImpostos($scope.contatos);
  };

  var gerarImpostos = function (contatos) {
    contatos.forEach(function (contato) {
      contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
    });
  };

  var calcularImposto = function (preco) {
    return preco * 1.2;
  };

  var generateSerial = function (contatos) {
    contatos.forEach(function (item) {
      item.serial = serialGenerator.generate();
    });
  };

  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
    $scope.verificarSelecao($scope.contatos);
  };

  $scope.verificarSelecao = function (contatos) {
    console.log(counter++);
    $scope.hasContatoSelecionado = contatos.some(function (contato) {
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  init();
});